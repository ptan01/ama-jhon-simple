import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { loginUser} = useContext(AuthContext)

    const [show , setShow ] = useState(true)

    const navigate = useNavigate()
    const location = useLocation()
    console.log(location)

    const locationFrom = location.state?.from?.pathname || '/' ;

    const handleLogin =(e)=>{
        e.preventDefault()
        const from = e.target ;
        const email = from.email.value ;
        const password = from.password.value ;

        loginUser(email, password)
        .then((result)=>{
            console.log(result.user)
            from.reset()
            navigate( locationFrom , {replace: true})
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
                    <input autoComplete='' className='email-field' type="email" name="email" required/>
                </div>
                <div className='from-control'>
                    <label htmlFor="password">Password</label>
                    <input autoComplete='' className='email-field' type={show ? 'password' : 'text'} name="password" required/>
                    <p onClick={()=>setShow(!show)}><small>{show ? <span>Show password</span> : <span>Hide password</span>}</small></p>
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