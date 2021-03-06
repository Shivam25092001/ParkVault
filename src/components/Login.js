import React from 'react'
import '../components/Login.css'
import {Link} from 'react-router-dom';

export default function Login() {
    return (
        <div className="Login">
            <img className="login-bg" src="./images/login-bg.png" alt="" />
            <img className="mainpage-logo" src="./images/logo.png" alt=""/>
            <div className="login-box">
                <input className="username" type="text" name="username" id="username" placeholder="    Username"/>
                <input className="password" type="text" name="password" id="password" placeholder="    Password"/>
                <Link to="/map">
                    <button className="login-submit" type="submit">Login</button>
                </Link>
                
                    <div className="signup"><a href="#SignUp">Sign Up</a></div>               
                
            </div>
        </div>
    )
}
