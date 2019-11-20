import httpClient from "../../utils/httpClient";

const actions = {
  create: async (store, newProduct) => {
    try {
			const response = await httpClient.post("http://localhost:3001/products", newProduct);
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
			const response = await httpClient.get("http://localhost:3001/products");
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
  update: () => {},
  destroy: () => {}
};

export default actions;
