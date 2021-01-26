import React,{ Component } from 'react';

//our illustration
import registrationIllustration from '../../../assets/Images/registerIllustration.svg';
import logo from '../../../assets/Images/logo.png';

//our stylesheet
import './Register.css';


class Register extends  Component {
    render(){
        return(
            <div className="registration">
                <img src={logo} alt="logo" className="registration_logo"/>
                <img src={registrationIllustration} alt="reg-img" className="registration_img"/>
                <div className="registration_box">
                    <h3 className="registration_heading">Oh hi! we are so glad that you want to join our community :)</h3>
                    <p className="registration_sub_heading">but before we log you in we need some information from you please fill the form below</p>
                    <form className="registration_form">
                        <div className="registration_form_container">
                                <input type="email" placeholder="Enter Your Email" name="email" className="registration_form_input" required/>
                                <label htmlFor="email" className="registration_form_label">Enter Your Email</label>
                        </div>
                        <div className="registration_form_container">
                                <input type="password" placeholder="Password" name="password" className="registration_form_input" required/>
                                <label htmlFor="password" className="registration_form_label">Password</label>
                        </div>
                        <input type="submit" className="registration_form_button" value="Register"/>  
                    </form>
                    <p className="registration_para">Already a member?<span><a href="/login" className="registration_page_register">Login</a></span></p>
                </div>
            </div>
        );
    }
}

export default Register;