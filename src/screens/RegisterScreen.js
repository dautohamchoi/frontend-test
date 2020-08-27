import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import './loginScreen.css';

function RegisterScreen(props) {
    const token = Cookie.getJSON('token');

    const redirect = props.location.search ? props.location.search.split("=")[1] : '/login';
    
    useEffect(() => {
        // if user login successfully, they cannot login again
        if (token) {
            props.history.push('/');
        }
    }, [token])
    
    const submitHandler = (e) => {
        e.preventDefault();
        alert("Cannot create a new account.")
    }

    return (
        <div className="login-screen">
            <div className="login-container">
                <div className="login-header">
                    <img src="/logo.svg" alt="logo" ></img>
                    <h4>New here?</h4>
                    <h6>Signing up is easy. It only takes a few steps</h6>
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
                            ></input>
                        </li>
                        <li>
                            <input 
                                type="email" 
                                name="email"
                                id="email" 
                                placeholder="Email"
                                required
                                className="form-control"
                            ></input>
                        </li>
                        <li>
                            <select
                                name="country"
                                id="country" 
                                required
                                className="form-control"
                            >
                                <option disabled selected value="">Country</option>
                                <option value="USA">United States of America</option>
                                <option value="India">India</option>
                                <option value="Germany">Germany</option>
                                <option value="Argentina">Argentina</option>
                            </select>
                        </li>
                        <li>
                        <input 
                                type="password" 
                                name="password"
                                id="password" 
                                placeholder="Password"
                                required
                                className="form-control"
                            ></input>
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
                                    <span>I agree to all Terms &amp; Conditions</span>
                                </label>
                            </div>
                        </li>
                        <li>
                            <button 
                                className="login-button" 
                                type="submit"
                            >SIGN UP</button>
                        </li>
                        <li>
                            <p>
                                Already have an account?
                                <Link
                                className="link blueColor"
                                to={redirect === "/login" ? "login" : "login?redirect=" + redirect}
                                > Login</Link>
                            </p>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
    )
}

export default RegisterScreen;