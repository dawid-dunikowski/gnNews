import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

function Modal({children, isOpen, handleOnClose}) {
  const modalRef = useRef(null);

  useEffect(()=>{
    if(!modalRef.current) return;

    const {current: modal} = modalRef;

    if(isOpen) {

      modal.showModal();
    } else   {

      modal.close();
    }
   
  },[isOpen]);

  useEffect(()=>{
    const {current: modal} = modalRef;

    const handleCancel = event => {
      event.preventDefault();
      handleOnClose();
    }
   
    modal.addEventListener('cancel',handleCancel);

    return () => {
      modal.removeEventListener('cancel',handleCancel)
    }
    
  },[handleOnClose]);

  const modalStyle = { 
    border: 'none',
    borderRadius: "10px"
  };

  const handleOutSideClick = ({target}) =>{
    const {current} = modalRef;

    if(target === current) {
      handleOnClose();
    }
  }

  return ReactDOM.createPortal ( 
    ( 
    <dialog  ref={modalRef} style={modalStyle} onClick={handleOutSideClick}>
      {children}
    </dialog>
    ),
    document.body
   );
}
 
export default Modal;
