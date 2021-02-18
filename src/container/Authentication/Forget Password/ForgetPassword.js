import React,{useRef,useState} from 'react';

//illustration
import expertLogin from '../../../assets/Images/expertLoginIllustration.svg';
import logo from '../../../assets/Images/logo.png';
import {useAuth} from '../AuthProvider';

//my css
import './ForgetPassword.css';

const ForgetPassword = ()=> {

        const emailRef = useRef();
        const { resetPassword} = useAuth();
        const [error , setError] = useState('');
        const [loading , setLoading] = useState(false);
        const [message , setMessage] = useState('');
        // const history = useHistory();

        async function submitHandler(event){
            event.preventDefault()
    
            try{
                setMessage('')
                setError('')
                setLoading(true)
                await resetPassword(emailRef.current.value)
                setMessage('Check your Inbox for further instruction')
                // history.push('/homepage')
    
            }catch{
                setError('Failed to reset password')
            }
    
            setLoading(false) 
        }
    
        return(
            <div className="forgetpassword_authentication">
                <img src={logo} className="forgetpassword_login-logo" alt="logo"/>
                <img src={expertLogin} className="forgetpassword_authentication_img" alt="illustration"/>
                <div className="forgetpassword_authentication_box">
                    <p className="forgetpassword_auth_heading">Reset your Password :)</p>
                    { error ? <p className='error' >{error}</p> : null}
                    { message ? <p className='success'>{message}</p> : null}
                    <form className="forgetpassword_auth_form" onSubmit={submitHandler}>
                        <div className="forgetpassword_auth_form_container">
                            <input type="email" placeholder="Enter Your Email" name="email" className="forgetpassword_auth_form_input" ref={emailRef}  required/>
                            <label htmlFor="email" className="forgetpassword_auth_form_label">Enter Your Email</label>
                        </div>
                        <input type="submit" className="forgetpassword_auth_form_button" value="Reset"/>  
                    </form>  
                    <p className="auth_para">Go back to <span><a href="/login" className="forgetpassword_page_login">Login</a></span></p>
                </div>
            </div>
        );
    
}

export default ForgetPassword;