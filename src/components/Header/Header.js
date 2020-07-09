import React from 'react';
import './header.scss';

import Logo from './../../assets/logo.png';

function Header(props) {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <img src={Logo} alt="Pouch Logo" />
                </div>
            </div>
        </header>
    )
}

export default Header;
