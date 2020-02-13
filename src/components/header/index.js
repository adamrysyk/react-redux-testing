import React from 'react';

import './styles.scss';
import Logo from '../../assets/logo.png';

const Header = (props) => {
    return (
        <header>
            <div className="wrapper">
                <img src={Logo} className="logo" alt="logo" />
            </div>
        </header>
    )

}

export default Header;
