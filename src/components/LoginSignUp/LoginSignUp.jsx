import React, { useState } from 'react';
import './loginSignUp.css';
import BackgroundLogin from '../../images/backgroundLogin.jpg'
import Header from '../Header/Header';

function LoginSignUp() {
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);
    const [activeButton, setActiveButton] = useState('login');

    const toggleForm = () => {
        setIsLoginFormVisible(!isLoginFormVisible);
        setActiveButton(activeButton === 'login' ? 'signUp' : 'login');

    };

    return (
        <div className="container">
        <Header/>
            <div className={`form-container ${isLoginFormVisible ? 'login' : 'signUp'}`}>
                {isLoginFormVisible ? (
                    <LoginForm toggleForm={toggleForm} activeButton={activeButton} />
                ) : (
                    <SignUpForm toggleForm={toggleForm} activeButton={activeButton} />
                )}
            </div>
        </div>
    );
}

function LoginForm({ toggleForm, activeButton }) {
    return (
        
        <div className='login_container'>
                <div className='login_signUp'>
                <div className='login_signUp_button'>
                    <button id='1' className={`login_signUp_button_button ${activeButton === 'login' ? 'active' : ''}`}>Login</button>
                    <button id='2' className={`login_signUp_button_button ${activeButton === 'signUp' ? 'active' : ''}`} onClick={toggleForm}>Sign Up</button>
                </div>
                <div className='details-input-container'>
                <div className='login_signUp_title'><h5>Welcome Back!</h5></div>
                <div className='login_signUp_form'>
                    <form className='login_signUp_button_form_form'>
                        <div className='login_signUp_button_form_form_input'><input type='text' id='email' name='email' placeholder='Email *'></input></div>
                        <div className='login_signUp_button_form_form_input'><input type='text' id='password' name='password' placeholder='Password *'></input></div>
                    </form>
                </div>
                </div>
                <div className='login_signUp_button_login'>
                    <button className='login_signUp_button_login_button'>LOG IN</button>
                </div>
            </div>
        </div>


    );
}

function SignUpForm({ toggleForm, activeButton }) {
    return (
        <div className='login_container'>

        <div className='login_signUp_singUp'>
            <div className='login_signUp_button'>
                <button  className={`login_signUp_button_button ${activeButton === 'login' ? 'active' : ''}`} onClick={toggleForm}>Login</button>
                <button  className={`login_signUp_button_button ${activeButton === 'signUp' ? 'active' : ''}`}>Sign Up</button>
            </div>
            <div className='details-input-container'>

            <div className='login_signUp_title'><h5>Sign Up For Free</h5></div>
            <div className='login_signUp_form_form'>
                <form className='login_signUp_button_form_form'>
                <div className='login_signUp_button_form_form_input'><input type='text' id='fullName' name='fullName' placeholder='Full Name *'></input></div>

                <div className='login_signUp_button_form_form_input'><input type='text' id='email' name='email' placeholder='Email *'></input></div>
                <div className='login_signUp_button_form_form_input'><input type='text' id='password' name='password' placeholder='Password *'></input></div>

                </form>
            </div>
            </div>
            <div className='login_signUp_button_login_getStarted'>
                <button className='login_signUp_button_login_button_getStarted'>GET STARTED</button>
            </div>
        </div>
        </div>
    );
}

export default LoginSignUp;

