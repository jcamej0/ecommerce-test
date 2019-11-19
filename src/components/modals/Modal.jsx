import React, { useState } from 'react';
import Modal from 'react-modal';

const ModalGeneric = ({ isOpen, children }) => {
    const [modalIsOpen, changeModalIsOpen] = useState(false);

    const toggleModal = () => {
        changeModalIsOpen(!modalIsOpen);
    };

    return(
        <div>
        <Modal
          isOpen={isOpen}
          onRequestClose={toggleModal}
        >
          {children}
        </Modal>
      </div>
    )
};

export default ModalGeneric;

