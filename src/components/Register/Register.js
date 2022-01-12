import './Register.css'

// This component should present the user with 3 TextInput components (Email, Password, ConfirmPassword)
// The final component should be a SubmitButton component so the user can submit the form to the MongoDB

import { useState } from "react";
import { signUpFetch } from "../../utils";

export const Register = ({ setUser, setCurrentPage }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const registerHandler = async (e) => {
        e.preventDefault();
        try {
            signUpFetch(email, password, setUser, setCurrentPage);
        } catch (error) {
            console.log(error);
        }
    };

    return(

       
        <div className='content'> 
            <form className='form' onSubmit={registerHandler}>
                 <h1 className='singUp-title'>Sign Up</h1>
                <input className='signUp-input'
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input className='signUp-input'
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className='submit-btn' type="submit">Submit</button>
            </form>
        </div>
    )
};
