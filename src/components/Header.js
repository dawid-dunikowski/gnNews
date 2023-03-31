import React  from 'react';
import { Link } from 'react-router-dom';
import ButtonsGrid from './ButtonsGrid';
import DescriptionPopup from './Modal/DescriptionPopup';

function Header() {
  
    return(
        <header className="d-flex flex-wrap justify-content-center px-5 py-3 mb-sm-4 border-bottom grid-header">
            <Link to="/" className="d-flex align-items-center me-auto link-body-emphasis text-decoration-none"><span className="fs-4 text-muted">gnNews</span></Link>
            <ButtonsGrid/>
            <DescriptionPopup/>
        </header>
    )
}

export default Header;