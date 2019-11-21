import React, { useState, useEffect } from "react";
import useGlobalState from "../../state";
import Modal from "../../components/modals";
import Spinner from "../../ui-library/loading-spinner";
import ProductForm from "./components/product-form";
import ProductList from "./components/product-list";
import Button from "../../components/buttons";
import theme from "./theme.module.scss";

const Products = () => {
  const [globalState, globalActions] = useGlobalState();
  const {
    products: {
      create: createProduct,
      fetch: fetchProducts,
      destroy: destroyProducts,
      update: updateProduct
    }
  } = globalActions;
  const {
    products: { products }
  } = globalState;
  const [fetchingProducts, setFetchingProducts] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editMode, setEditMode] = useState({ state: false, product: null });

  useEffect(() => {
    toggleLoading(true);
    (async () => {
      await fetchProducts();
      toggleLoading(false);
    })();
  }, []);

  useEffect(() => {}, [products]);

  const handleToggleModal = () => {
    setModalIsOpen(!modalIsOpen);
    if (editMode.state) {
      setEditMode({ state: false, product: null });
    }
  };

  const handleCreateProduct = async product => {
    const response = await createProduct(product);

    if (response) {
      handleToggleModal();
    }
  };

  const handleDeleteProduct = async products => {
		toggleLoading(true);
		await destroyProducts(products);
		toggleLoading(false);
  };

  const editItemMode = product => {
    setEditMode({ state: true, product });

    handleToggleModal();
  };

  const handleItemEdit = async product => {
    const response = await updateProduct(product, editMode.product.id);
    if (response) {
      handleToggleModal();
    }
	};
	
	const toggleLoading = (state) => {
		setFetchingProducts(state);
	}
  return (
    <div>
      <Button
				color="green"
				ico="add"
        className={theme['add-product-button']}
        handleClick={handleToggleModal}
      >
        <span>Agregar Producto</span>
      </Button>
      <div>
        <ProductList
          products={products}
          handleDelete={handleDeleteProduct}
          handleEdit={editItemMode}
        />
      </div>

      <Modal isOpen={modalIsOpen} handleToggleModal={handleToggleModal}>
        {editMode.state && (
          <ProductForm product={editMode.product} onSubmit={handleItemEdit} />
        )}
        {!editMode.state && <ProductForm onSubmit={handleCreateProduct} />}
      </Modal>
      {fetchingProducts && <Spinner />}
    </div>
  );
};

export default Products;
