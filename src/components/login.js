import { useState } from "react";
import { loginFetch, signUpFetch } from "../utils";

export const Login = ({ setUser }) => {
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
    const signUpHandler = async (e) => {
        e.preventDefault();
        try {
            signUpFetch(email, password, setUser);            
        } catch (error) {
            console.log(error);
        }
    };

    //html to be displayed
    return (
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
            <form onSubmit={signUpHandler}>Sign Up
            <input
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button type="submit">Create Account</button>
            </form>
        </div>
    );
};