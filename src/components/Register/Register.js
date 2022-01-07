import './Register.css'

// This component should present the user with 3 TextInput components (Email, Password, ConfirmPassword)
// The final component should be a SubmitButton component so the user can submit the form to the MongoDB

import { useState } from "react";
import { signUpFetch } from "../../utils";

export const Register = ({ setUser }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const registerHandler = async (e) => {
        e.preventDefault();
        try {
            signUpFetch(email, password, setUser);
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <div>
            <form onSubmit={registerHandler}>Sign Up
                <input
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
};
