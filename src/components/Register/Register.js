import './Register.css'

// This component should present the user with 3 TextInput components (Email, Password, ConfirmPassword)
// The final component should be a SubmitButton component so the user can submit the form to the MongoDB

import { useState } from "react";
import { signUpFetch } from "../../utils";

export const Register = ({ setUser, setCurrentPage }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const registerHandler = async (e) => {
        e.preventDefault();
        console.log(email);
        setErrorMessage("");
        if(email===""|| password===""||confirmPassword==="")return;        
         else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){setErrorMessage("Invalid email!")}        
         else if(password === confirmPassword) {
            try {
                signUpFetch(email, password, setUser, setCurrentPage, setErrorMessage);
            } catch (error) {
                console.log(error);
            }
        } else {
            setErrorMessage("Passwords do not match!");
        }
    };

    return(
        <div className='register-page'>
            <div className="register-content">
                <h3 className="register-error">{errorMessage}</h3> 
                <form className='register-form' onSubmit={registerHandler}>
                    <h1 className='register-title'>Register</h1>
                    <input className='register-input'
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Email"
                    />
                    <input className='register-input'
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                    />
                    <input className='register-input'
                            type="password"
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password"
                    />
                    <button className='register-submit-btn' type="submit">Register</button>
                </form>
            </div>
        </div>
    )
};
