import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

function Modal({ children, isOpen, handleOnClose }) {
  const modalRef = useRef(null);

  useEffect(() => {
    const { current: modal } = modalRef;

    if (!modal) return;

    if (isOpen) {
      modal.showModal();
    } else {
      modal.close();
    }

    const handleCancel = (event) => {
      event.preventDefault();
      handleOnClose();
    };

    modal.addEventListener('cancel', handleCancel);

    return () => {
      modal.removeEventListener('cancel', handleCancel);
    };
  }, [isOpen, handleOnClose]);

  const modalStyle = {
    border: 'none',
    borderRadius: '10px'
  };

  const handleOutsideClick = ({ target }) => {
    const { current } = modalRef;

    if (target === current) {
      handleOnClose();
    }
  };

  return ReactDOM.createPortal(
    <dialog ref={modalRef} style={modalStyle} onClick={handleOutsideClick}>
      {children}
    </dialog>,
    document.body
  );
}

export default Modal;
