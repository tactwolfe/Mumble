import React , { useRef, useState }  from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../AuthProvider';


//our illustration
import registrationIllustration from '../../../assets/Images/registerIllustration.svg';
import logo from '../../../assets/Images/logo.png';

//our stylesheet
import './Register.css';

const Register = (props) => {

    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const {signup , currentUser} = useAuth()
    const [error , setError] = useState('');
    const history = useHistory();
    const [loading , setLoading] = useState(false);



    async function submitHandler(event){

        event.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('passwords do not match')
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value , passwordRef.current.value )
            history.push('/homepage')
        }catch{
            setError('Failed to create an account')
        }

        setLoading(false) 
    }

        return(
                <div className="registration">
                    <img src={logo} alt="logo" className="registration_logo"/>
                    <img src={registrationIllustration} alt="reg-img" className="registration_img"/>
                    <div className="registration_box">
                        <h3 className="registration_heading">Oh hi! we are so glad that you want to join our community :)</h3>
                        <p className="registration_sub_heading">but before we log you in we need some information from you so please fill the form below</p>
                        { error ? <p className='error' >{error}</p> : null}
                        {/* {currentUser && currentUser.email} */}
                        <form className="registration_form" onSubmit={submitHandler}>
                            <div className="registration_form_container">
                                    <input 
                                    type="email" 
                                    placeholder="Enter Your Email" 
                                    name="email" 
                                    className="registration_form_input" 
                                    ref={emailRef} 
                                    required />

                                    <label 
                                    htmlFor="email" 
                                    className="registration_form_label">
                                    Enter Your Email
                                    </label>
                            </div>
                            <div className="registration_form_container">
                                    <input 
                                    type="password" 
                                    placeholder="Password" 
                                    name="password" 
                                    className="registration_form_input" 
                                    ref={passwordRef} 
                                    required />

                                    <label 
                                    htmlFor="password" 
                                    className="registration_form_label">
                                    Password <span style={{color : "red"}}> (NOTE : Make sure it is 6 character long)</span>
                                    </label>
                            </div>
                            <div className="registration_form_container">
                                    <input 
                                    type="password" 
                                    placeholder="Confirm Password" 
                                    name="confirm_password" 
                                    className="registration_form_input" 
                                    ref={passwordConfirmRef} 
                                    required />

                                    <label 
                                    htmlFor="confirm_password" 
                                    className="registration_form_label">
                                    Confirm Password
                                    </label>
                            </div>
                            <input 
                            disabled={loading} 
                            type="submit" 
                            className="registration_form_button" 
                            value="Register"/>  

                        </form>
                        <p className="registration_para">Already a member?<span><a href="/login" className="registration_page_register">Login</a></span></p>
                    </div>
            </div>  
        );
    
}

export default Register;