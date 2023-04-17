import React, { useContext } from 'react';
import './Header.css'
import logo from "../../assets/images/Logo.svg"
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
const Header = () => {
    const { user ,logOut} = useContext(AuthContext)
    const handleSignOut =()=>{
        logOut()
        .then(resut =>{
            console.log(resut)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    return (
        <div className='header'>
            <img src={logo} alt="" />
         
               
               <div>
               <Link to="/">Shop</Link>
                <Link to="/order">Order</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/login">LogIn</Link>
                <Link to="/signup">Sign Up</Link>
                {
                    user && <span className='text-white'>{user.email} <button onClick={handleSignOut}>Sign Out</button> </span>
                }
               </div>
                
        
           
        </div>
    );
};

export default Header;