import React, { useState } from "react";
import theme from "./theme.module.scss";

const ProductForm = ({ handleCreateProduct }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    price: "",
    category: ""
  });

  const changeName = event => {
    const newName = event.target.value;
    setFormValues({ ...formValues, name: newName });
  };

  const changePrice = event => {
    const newPrice = event.target.value;
    setFormValues({ ...formValues, price: newPrice });
  };

  const changeCategory = event => {
    const newCategory = event.target.value;
    setFormValues({ ...formValues, category: newCategory });
  };

  const handleSubmit = event => {
      event.preventDefault();
      handleCreateProduct(formValues);
  }

  return (
    <div className={theme.container}>
      <form onSubmit={handleSubmit}>
        <h1 className={theme["form-title"]}>Nuevo producto</h1>
        <label for="name">Nombre producto: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formValues.name}
          onChange={changeName}
          placeholder="Nombre del producto"
        />
        <label for="price">Precio: </label>
        <input
          type="text"
          name="price"
          id="price"
          value={formValues.price}
          onChange={changePrice}
          placeholder="Precio del producto"
        />
        <label for="category">Categoria: </label>
        <select
          name="category"
          id="category"
          value={formValues.category}
          onChange={changeCategory}
        >
          <option>Ropa</option>
          <option>Joyeria</option>
          <option>Electrodomesticos</option>
        </select>
        <div className={theme.rule}></div>
        <div className={theme['form-footer']}>
          <button type="submit" className={theme.submit}>
            Agregar producto
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
