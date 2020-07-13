import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';
import { auth } from './../../firebase/utils';

import Logo from './../../assets/logo.png';

function Header(props) {
    const { currentUser } = props;

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
                    {currentUser && (
                        <ul>
                            <li>
                                <span onClick={() => auth.sightOut()}>
                                    LogOut
                                </span>
                            </li>
                        </ul>
                    )}

                    {!currentUser && (
                        <ul>
                            <li>
                                <Link to="/registration">
                                    Register
                            </Link>
                            </li>
                            <li>
                                <Link to="/login">
                                    Login
                            </Link>
                            </li>

                        </ul>
                    )}
                </div>
            </div>
        </header>
    )
}

Header.defaultProps = {
    currentUser: null
}

export default Header;
