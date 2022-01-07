import './SignIn.css'

// This component should contain 2 TextInput components (Email, Password) and a SubmitButton component
// Submitting the form should check the MongoDB for verification of the users existance and correct password

import { useState } from "react";
import { loginFetch } from '../../utils';

export const SignIn = ({ setUser }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();    
    

    const loginHandler = async (e) => {
        e.preventDefault();
        try {
            loginFetch(email, password, setUser);
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <div>
            <form onSubmit={loginHandler}>Log in
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}