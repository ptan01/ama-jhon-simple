import React, { useContext, useState } from 'react';
import './Signup.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const SignUp = () => {
    const { createUser } = useContext(AuthContext)

    const [error , setError] = useState('')
    const [success, setSuccess] = useState('')


    const handleSignUp = (event) =>{
        event.preventDefault()
        setError('')
        const from = event.target ;
        const email = from.email.value ;
        const password = from.password.value ;
        const confirm = from.confirm.value ;
        console.log(email, password, confirm)
        if(password !== confirm){
            setError('in correct confirm password')
            return;
        }
        else if (password.length < 6){
            setError('password must be 6 cracture')
            return;
        }
        
        createUser(email, password)
        .then((result)=>{
           const user = result.user
           console.log(user)
           setSuccess('user created success fully')
        })
        .catch((err)=>{
            console.log(err)
            setError(err.message)
        })
    }



    return (
        <div className='from-container'>
            <h2 className='from-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className='from-control'>
                    <label htmlFor="email">Email</label>
                    <input className='email-field' type="email" name="email" id="" required />
                </div>

                <div className='from-control'>
                    <label htmlFor="password">Password</label>
                    <input className='email-field' type="password" name="password" id="" required />
                </div>

                <div className='from-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input className='email-field' type="password" name="confirm" id="" required />
                </div>

                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p style={{color: 'red'}}>{error}</p>
            <p style={{color: 'green'}}>{success}</p>
            <p className='text-account'>Already have an account ?<Link to='/login'><span className='orange'>Login</span></Link></p>
            <div className='google-container'>
                <img className='google-img' src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg" alt="" />
                <p>Continue with Google</p>
            </div>

        </div>
    );
};

export default SignUp;