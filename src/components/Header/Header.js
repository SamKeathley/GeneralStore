import React from 'react';
import './header.scss';
import { Link } from 'react-router-dom';

import Logo from './../../assets/logo.png';

function Header(props) {
    return (
        <header className="header">
            <div className="wrap">
                <div className="logo">
                    <Link to="/">
                        <img src={Logo} alt="Pouch Logo" />
                    </Link>
                </div>
                <h1>The General Store</h1>
                <div className="callToActions">
                    <ul>
                        <li>
                            <Link to="/registration">
                                Register
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;
