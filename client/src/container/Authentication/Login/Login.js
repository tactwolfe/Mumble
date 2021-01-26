import React,{ Component } from 'react';

//src for our illustration & logo
import AuthenticationIllustration from '../../../assets/Images/Authentication.svg';
import logo from "../../../assets/Images/logo.png";

//our style sheet
import "./Login.css";

class Authentication extends Component {
    render(){
        return(
            <div className="authentication">
                <img src={logo} className="login-logo" alt="logo"/>
                <img src={AuthenticationIllustration} className="authentication_img" alt="illustration"/>
                <div className="authentication_box">
                    <p className="auth_heading">Welcome Back :)</p>
                    <form className="auth_form">
                        <div className="auth_form_container">
                            <input type="email" placeholder="Enter Your Email" name="email" className="auth_form_input" required/>
                            <label htmlFor="email" className="auth_form_label">Enter Your Email</label>
                        </div>
                        <div className="auth_form_container">
                            <input type="password" placeholder="Password" name="password" className="auth_form_input" required/>
                            <label htmlFor="password" className="auth_form_label">Password</label>
                        </div>
                        <input type="submit" className="auth_form_button" value="Login"/>  
                    </form>
                    <p className="auth_para">Not a member?<span><a href="/register" className="auth_page_register">Register</a></span></p>
                    
                </div>
            </div>
        );
    }
}

export default Authentication;