import React,{ useRef , useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth} from '../AuthProvider';

//src for our illustration & logo
import AuthenticationIllustration from '../../../assets/Images/Authentication.svg';
import logo from "../../../assets/Images/logo.png";

//our style sheet
import "./Login.css";

const Login = ()=> {

    const emailRef = useRef();
    const passwordRef = useRef();
    const { login , currentUser } = useAuth();
    const [error , setError] = useState('');
    const [loading , setLoading] = useState(false);
    const history = useHistory();
    

    async function submitHandler(event){
        event.preventDefault()

        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value , passwordRef.current.value )
            history.push('/homepage')

        }catch{
            setError('Failed to Login check your network connection and make sure that your credentials are correct')
        }

        setLoading(false) 
    }

 
        return(
            <div className="authentication">
                <img src={logo} className="login-logo" alt="logo"/>
                <img src={AuthenticationIllustration} className="authentication_img" alt="illustration"/>
                <div className="authentication_box">
                    <p className="auth_heading">Welcome Back :)</p>
                    { error ? <p className='error' >{error}</p> : null}
                    {currentUser && currentUser.email}
                    <form className="auth_form" onSubmit={submitHandler}>
                        <div className="auth_form_container">
                            <input 
                            type="email" 
                            placeholder="Enter Your Email" 
                            name="email" 
                            className="auth_form_input" 
                            ref={emailRef} 
                            required/>

                            <label 
                            htmlFor="email" 
                            className="auth_form_label">Enter Your Email
                            </label>
                        </div>
                        <div className="auth_form_container">
                            <input 
                            type="password" 
                            placeholder="Password" 
                            name="password" 
                            className="auth_form_input" 
                            ref={passwordRef} 
                            required/>

                            <label 
                            htmlFor="password" 
                            className="auth_form_label">Password
                            </label>
                        </div>
                        <input 
                        disabled={loading} 
                        type="submit" 
                        className="auth_form_button" 
                        value="Login"/> 
                         
                    </form>
                    <p className="auth_para">Not a member?<span><a href="/register" className="auth_page_register">Register</a></span></p>
                    <p className="auth_para">Forget your password?<span><a href="/register" className="auth_page_register">Reset Here</a></span></p>
                    
                </div>
            </div>
        );
}

export default Login;