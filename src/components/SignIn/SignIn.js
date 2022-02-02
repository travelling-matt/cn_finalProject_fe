import './SignIn.css'

// This component should contain 2 TextInput components (Email, Password) and a SubmitButton component
// Submitting the form should check the MongoDB for verification of the users existance and correct password

import { useState } from "react";
import { loginFetch } from '../../utils';

export const SignIn = ({ setUser, setCurrentPage }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [errorMessage, setErrorMessage] = useState(" ");
    
    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            loginFetch(email, password, setUser, setCurrentPage, setErrorMessage);
        } catch (error) {
            console.log(error);
        }
    };
    
    return(
        <div className="signin-page">
        <div className='signin-content'>
            <h3 className="signin-error">{errorMessage}</h3>
            <form className='signin-form' onSubmit={loginHandler}>
                <h1 className='signin-title'>Log In</h1>
                <input className='signin-input'
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input className='signin-input'
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                
                <button className='signin-button' type="submit">Log In</button>
            </form>
        </div>
        </div>
    )
}