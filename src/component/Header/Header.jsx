import React from 'react';
import './Header.css'
import logo from "../../assets/images/Logo.svg"
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <a href="/oder">Oder</a>
                <a href="/review">Review</a>
                <a href="/inventory">Inventory</a>
                <a href="/log-in">Log In</a>
            </div>
        </div>
    );
};

export default Header;