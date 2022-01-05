import { useState } from "react";
import { loginFetch, signUpFetch } from "../utils";

export const Login = ({ setUser }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    // const submitHandler = async (e) => {
    //     e.preventDefault();
    //     try {
    //         //this logic needs re-writing as we don't have a username and log in by email
    //         if (email) {
    //             signUpFetch(email, password, setUser);
    //         } else {
    //             loginFetch(email, password, setUser);
    //         }
    //     } catch (error) {}
    // };

    //html to be displayed
    return (
        <div>
            <form onSubmit={loginFetch}>Log in
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
            <form onSubmit={signUpFetch}>Sign Up
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