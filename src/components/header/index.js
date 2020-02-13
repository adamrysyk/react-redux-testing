import React from 'react';

import './styles.scss';
import Logo from '../../assets/logo.png';

const Header = (props) => {
    return (
        <header className="header" data-test="header">
            <div className="wrapper">
                <div className="logo">
                    <img src={Logo} className="logo-img" alt="logo" data-test="logo-img" />
                </div>
            </div>
        </header>
    )

}

export default Header;
