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
        <div className='content'>
            <form className='signIn-form' onSubmit={loginHandler}>
                <h1 className='signIn-title'>Log In</h1>
                <input className='signIn-input'
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input className='signIn-input'
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <h3 className="error">{errorMessage}</h3>
                <button className='login-btn' type="submit">Log In</button>
            </form>
        </div>
    )
}