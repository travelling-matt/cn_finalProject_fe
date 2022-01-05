import { useState } from "react";
import { loginFetch, signUpFetch, signupFetch } from "../utils";

export const Login = ({ setUser }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [loginBool, setLoginBool] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            //this logic needs re-writing as we don't have a username and log in by email
            if (email) {
                signUpFetch(username, email, password, setUser);
            } else {
                loginFetch(username, password, setUser);
            }
        } catch (error) {}
    };

    //http to be displayed
    return (
        <div>
            <form onSubmit={submitHandler}>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                {!loginBool && (
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                )}
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button type="submit">Submit</button>
            </form>
            <button
                onClick={(e) => {
                    e.preventDefault();
                    setLoginBool(!loginBool);
                }}
            >
                {loginBool ? "Sign Up?" : "Log In?"}
            </button>
        </div>
    );
};