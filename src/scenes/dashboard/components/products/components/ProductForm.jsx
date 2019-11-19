import React, { useState } from 'react';

const ProductForm = () => {
    const [formValues, setFormValues] = useState({
        name: '',
        price: '',
        category: '',
    });

    const changeName = (event) => {
        const newName = event.target.value;
        setFormValues({...formValues, name: newName}); 
    };

    const changePrice = (event) => {
        const newPrice = event.target.value;
        setFormValues({...formValues, price: newPrice});

    };

    const changeCategory = (event) => {
        const newCategory = event.target.value;
        setFormValues({...formValues, category: newCategory});
    };

    return(
        <div>
            <h1>Nuevo producto</h1>
            <form>
                <input type="text" name="name" id="name" value={formValues.name} onChange={changeName}/>
                <label for="name">Nombre producto: </label>
                <input type="text" name="price" id="price" value={formValues.price} onChange={changePrice}/>
                <label for="price">Precio: </label>
                <select name="category" id="category" value={formValues.category} onChange={changeCategory}>
                    <option>Ropa</option>
                    <option>Joyeria</option>
                    <option>Electrodomesticos</option>
                </select>
                <label for="category">Categoria: </label>
            </form>
        </div>
    )
};

export default ProductForm;