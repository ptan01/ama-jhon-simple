import React from 'react';
import './Signup.css'

const SignUp = () => {
    return (
        <div className='signup-container'>
            <h2 className='from-title'>Sign Up</h2>
            <form>
                <div className='from-control'>
                    <label htmlFor="email">Email</label>
                    <input className='email-field' type="email" name="email" id="" required />
                </div>

                <div className='from-control'>
                    <label htmlFor="password">Password</label>
                    <input className='email-field' type="password" name="password" id="" required />
                </div>

                <div className='from-control'>
                    <label htmlFor="password">Confirm Password</label>
                    <input className='email-field' type="password" name="confirm" id="" required />
                </div>

                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p className='text-account'>Already have an account ?<span className='orange'>Login</span></p>
            <div className='google-container'>
                <img className='google-img' src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=595&height=400&name=image8-2.jpg" alt="" />
                <p>Continue with Google</p>
            </div>

        </div>
    );
};

export default SignUp;