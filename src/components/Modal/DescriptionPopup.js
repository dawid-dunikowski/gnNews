import React, { useState } from 'react';
import Modal from './Modal';

const DescriptionPopup = () => {
    const [isOpen,setIsOpen] = useState(false);
    const hidePopup = () =>{
      setIsOpen(prev=> !prev);
    }

    return ( 
        <> {
          isOpen && <Modal handleOnClose={hidePopup} isOpen={isOpen}>
          <div className="jumbotron jumbotron-fluid p-3 p-xl-5">
              <div className="container">
                  <h2 className="display-4">Fluid jumbotron</h2>
                  <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                  <button type="button" className="btn btn-outline-secondary" onClick={hidePopup}>Close</button>
              </div>
          </div>
       </Modal>
          }
          
          <button type="button" className="btn btn-outline-secondary" onClick={hidePopup}>Pokaż Info</button>
        </>
     );
}
 
export default DescriptionPopup;