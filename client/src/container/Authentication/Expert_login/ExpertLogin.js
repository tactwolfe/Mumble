import React,{ Component } from 'react';

//illustration
import expertLogin from '../../../assets/Images/expertLoginIllustration.svg';
import logo from '../../../assets/Images/logo.png';

//my css
import './ExpertLogin.css';

class ExpertLogin extends Component {

    render(){
        return(
            <div className="expert_authentication">
                <img src={logo} className="expert_login-logo" alt="logo"/>
                <img src={expertLogin} className="expert_authentication_img" alt="illustration"/>
                <div className="expert_authentication_box">
                    <p className="expert_auth_heading">Welcome Expert :)</p>
                    <form className="expert_auth_form">
                        <div className="expert_auth_form_container">
                            <input type="email" placeholder="Enter Your Email" name="email" className="expert_auth_form_input" required/>
                            <label htmlFor="email" className="expert_auth_form_label">Enter Your Email</label>
                        </div>
                        <div className="expert_auth_form_container">
                            <input type="password" placeholder="Password" name="password" className="expert_auth_form_input" required/>
                            <label htmlFor="password" className="expert_auth_form_label">Password</label>
                        </div>
                        <input type="submit" className="expert_auth_form_button" value="login"/>  
                    </form>  
                </div>
            </div>
        );
    }
}

export default ExpertLogin;