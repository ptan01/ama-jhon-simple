import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {

    const { loginUser} = useContext(AuthContext)

    const handleLogin =(e)=>{
        e.preventDefault()
        const from = e.target ;
        const email = from.email.value ;
        const password = from.password.value ;

        loginUser(email, password)
        .then((result)=>{
            console.log(result.user)
            from.reset()
        })
        .catch((err)=>{
            console.log(err.message);
        })
        
    }

    return (
        <div className='from-container'>
            <h2 className='from-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className='from-control'>
                    <label htmlFor="email">Email</label>
                    <input className='email-field' type="email" name="email" id="" required/>
                </div>
                <div className='from-control'>
                    <label htmlFor="password">Password</label>
                    <input className='email-field' type="password" name="password" id="" required/>
                </div>
                <input className='btn-submit' type="submit" value="Login" />
            </form>
                <p className='text-account'>New to Ema-jhon ? <Link to='/signup'><span className='orange'>Create New Account</span></Link></p>
                <div className='google-container'>
                    <img className='google-img' src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg" alt="" />
                    <p>Continue with Google</p>
                </div>
            
        </div>
    );
};

export default Login;