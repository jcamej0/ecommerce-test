import React, { useState } from 'react';
import Modal from '../../../../components/modals';
import ProductForm from './components/ProductForm';

import theme from './theme.module.scss';

const Products = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    const toggleModal = () => {
        setModalIsOpen(!modalIsOpen);
    };
    
    return(
        <div>   
            <button className={`${theme.button} ${theme["button-green"]}`} onClick={toggleModal}>
                Agregar Producto
            </button>
            <div>

            </div>

            <Modal isOpen={modalIsOpen}>
                <ProductForm />
            </Modal>
        </div>
    )
};

export default Products;