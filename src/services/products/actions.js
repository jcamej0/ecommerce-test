import httpClient from "../../utils/httpClient";
const URL = "http://localhost:3001/products/";
const actions = {
  create: async (store, newProduct) => {
    try {
			const response = await httpClient.post(URL, newProduct);
			const productCreated = await response.json();

			if(newProduct) {
				store.setState({
					products: {
						products: [...store.state.products.products, productCreated],
					}
				})
			}

			return true;
    } catch (e) {
			return false;
    }
  },
  fetch: async (store) => {
		try {
			const response = await httpClient.get(URL);
			const productList = await response.json();
			if(productList) {
				store.setState({
					products: { products: productList},
				})
			}

			return true;
		} catch (e) {
			return false;
		}
	},
  update: async (store, product, id) => {

		const stateProductIndex = store.state.products.products.findIndex(product => product.id === id);
		const products = store.state.products.products;
		products[stateProductIndex] = {...product, id};

		try {
			const response = await httpClient.put(URL, product, id)
			const updatedItem = await response.json();

			if(updatedItem) {
				store.setState({products:{
					products: products
				}})
			}

			return true;
		} catch(e){
			return false;
		}
	},
  destroy: async (store, products) => {
		const filterId = products.map(({id}) => id);
		const productsAfterDeleted = store.state.products.products.filter(product => {
			if(filterId.some(id => product.id === id)) {
				return false
			};
			return true;
		})
	
		const timeout = (ms) => {
			return new Promise(resolve => setTimeout(resolve, ms));
		}
		try {
			/*
				Hay un bug con json-server que si se hace PUT y DELETE seguido se crashea el server, para solucionarlo de manera provisional
				ejecuto cada delete con 200ms entre cada uno.
			*/

			for( const id of filterId) {
				await timeout(200);
				const response = await httpClient.destroy(URL, id);
				await response.json();
			}

			store.setState({
				state:{
					state: productsAfterDeleted,
				}
			});
		} catch(e) {

		}

	}
};

export default actions;
