import React from 'react';
import './Header.css'
import logo from "../../assets/images/Logo.svg"
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">LogIn</Link>
            </div>
        </div>
    );
};

export default Header;