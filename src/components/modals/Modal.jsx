import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

const ModalGeneric = ({ isOpen, handleToggleModal, children }) => {
    return(
        <div>
        <Modal
          isOpen={isOpen}
          onRequestClose={handleToggleModal}
          style={customStyles}
          shouldCloseOnOverlayClick={true}
        >
          {children}
        </Modal>
      </div>
    )
};

export default ModalGeneric;

