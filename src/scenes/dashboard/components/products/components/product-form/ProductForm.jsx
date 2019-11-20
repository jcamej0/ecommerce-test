import React, { useState } from "react";
import theme from "./theme.module.scss";

const ProductForm = ({ product, onSubmit }) => {
  const [formValues, setFormValues] = useState({
    name: product ? product.name : "",
    price: product ? product.price : "",
    category: product ? product.category : "",
  });
  const [ errorMessage, setErrorMessage ] = useState('');
  
  const changeName = event => {
    const newName = event.target.value;
    setFormValues({ ...formValues, name: newName });
  };

  const changePrice = event => {
    const newPrice = event.target.value;
    const regex = new RegExp("^[0-9]*$");
    
    if(!regex.exec(newPrice)) {
      return;
    }
    setFormValues({ ...formValues, price: newPrice });
  };

  const changeCategory = event => {
    const newCategory = event.target.value;
    setFormValues({ ...formValues, category: newCategory });
  };

  const checkFormError = () => {
    const {
      name,
      price,
      category,
    } = formValues;

    if(!name || !price || !category) {
      setErrorMessage("Debes llenar todos los campos");
      return false;  
    }

    return true;
  }

  const handleSubmit = event => {
      event.preventDefault();
      const noError = checkFormError();

      if(noError) {
        onSubmit(formValues);
      }
  }

  return (
    <div className={theme.container}>
      <form onSubmit={handleSubmit}>
        <h1 className={`${theme["form-title"]} ${product ? theme.edit : theme.create}`}>
          { product ? "Editar producto" : "Nuevo producto"}
        </h1>
        <label htmlFor="name">Nombre producto: </label>
        <input
          type="text"
          name="name"
          id="name"
          maxLength="20"
          value={formValues.name}
          onChange={changeName}
        />
        <label htmlFor="price">Precio: </label>
        <input
          type="text"
          name="price"
          id="price"
          maxLength="8"
          value={formValues.price}
          onChange={changePrice}
        />
        <label htmlFor="category">Categoria: </label>
        <select
          name="category"
          id="category"
          value={formValues.category}
          onChange={changeCategory}
        >
          <option defaultChecked>Electrodomesticos</option>
          <option>Patinetes</option>
          <option>Cocina</option>
          <option>Aspiración</option>
          <option>Cuidado Personal</option>
        </select>
        <div className={theme.rule}></div>
        <div className={theme['form-footer']}>
          <button type="submit" className={`${theme.submit} ${product ? theme.edit : theme.create}`}>
            Agregar producto
          </button>
          { errorMessage &&
            <p className={theme['error-message']}>{errorMessage}</p>
          }
        </div>
      </form>
    </div>
  );
};

export default ProductForm;
