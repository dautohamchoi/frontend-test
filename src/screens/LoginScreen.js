import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Cookie from 'js-cookie';
import './loginScreen.css';


function LoginScreen(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const token = Cookie.getJSON('token');
    console.log(token);

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/login';
    
    const submitHandler = async (e) => {
        e.preventDefault();
        const { data } = await axios.post("https://cyb06ylby6.execute-api.ap-southeast-1.amazonaws.com/v1/login", 
                            { username, password });
        Cookie.set('token', JSON.stringify(data));
        // redirect to the table
        props.history.push('/');
    }
    useEffect(() => {
        // if user login successfully, they cannot login again
        if (token) {
            props.history.push('/');
        }
    }, [token])

    return (
        <div className="login-screen">
            <div className="login-container">
                <div className="login-header">
                    <img src="/logo.svg" alt="logo" ></img>
                    <h4>Hello! let's get started</h4>
                    <h6>Sign in to continue.</h6>
                </div>
                <form className="login-form" onSubmit={submitHandler}>
                    <ul className="login-form-content">
                        <li>
                            <input 
                                type="text" 
                                name="username"
                                id="username" 
                                placeholder="Username"
                                required
                                className="form-control"
                                onChange={(e) => setUsername(e.target.value)}
                            ></input>
                        </li>
                        <li>
                        <input 
                                type="password" 
                                name="password"
                                id="password" 
                                placeholder="Password"
                                required
                                className="form-control"
                                onChange={(e) => setPassword(e.target.value)}
                            ></input>
                        </li>
                        <li>
                            <button 
                                className="login-button" 
                                type="submit"
                            >SIGN IN</button>
                        </li>
                        <li>
                            <div className="login-forgot-password">
                                <label htmlFor="login-auto">
                                    <input
                                        name="login-auto"
                                        value="auto"
                                        type="checkbox"
                                        className="form-control"
                                    />
                                    Keep me signed in
                                </label>
                                <span>
                                    <Link to="/login" className="link">Forgot password?</Link>
                                </span>
                            </div>
                        </li>
                        <li>
                            <button className="login-button-fb">
                                <Link 
                                    to="/login"
                                    className="link whiteColor"
                                >Connect using Facebook</Link>
                            </button>
                        </li>
                        <li>
                            <p>
                                Don't have an account?
                                <Link
                                className="link blueColor"
                                to={redirect === "/login" ? "register" : "register?redirect=" + redirect}
                                > Create</Link>
                            </p>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}

export default LoginScreen;