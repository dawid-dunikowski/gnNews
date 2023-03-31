import React, { useState } from 'react';
import Modal from './Modal';

const NewsPopup = ({title, source, content, url}) => {

    const [isOpen,setIsOpen] = useState(false);
    const hidePopup = () =>{
      setIsOpen(prev=> !prev);
    }
    return ( 
        <>
        {isOpen && <Modal handleOnClose={hidePopup} isOpen={isOpen} shoudBeCloseOutSide={true}>
            <div className="jumbotron jumbotron-fluid p-3 p-xl-5">
              <div className="container">
              <h3 className="display-4 font-weight-normal fs-4 mb-4"><a href={url}>{title}</a></h3>
              <p className="lead font-weight-normal">{content}</p>
              <p className="lead font-weight-normal"><strong>Source:</strong> {source}</p>
              <button type="button" className="btn btn-outline-secondary btn-rounded btn-md mb-4 waves-effect waves-light" onClick={hidePopup}>Close</button>
            </div>
          </div>
          </Modal>
        }
        
        <button type="button" className="btn btn-outline-secondary" onClick={hidePopup}>Pokaż Info</button>
       </>
     );
}
 
export default NewsPopup;