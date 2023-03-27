import React  from 'react';
import ButtonsGrid from './ButtonsGrid';

import DescriptionPopup from './Modal/DescriptionPopup';

function Header() {
  
    return(
        <header className="d-flex flex-wrap justify-content-center px-5 py-3 mb-4 border-bottom">
            <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <span className="fs-4 text-muted">gnNews</span>
            </a>
            <ButtonsGrid/>
            <DescriptionPopup/>
        </header>
    )
}

export default Header;