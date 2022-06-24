import React, { useContext, useEffect, useState } from 'react';
import '../../vendor/normalize.css';
import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login({ handleLogin }) {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const [isEmailValid, setEmailValidity] = useState(false);
    const [isPasswordValid, setPasswordValidity] = useState(false);

    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    function handleChangePassword(evt) {
        const input = evt.target;
        setPasswordValue(input.value);
        setPasswordValidity(input.validity.valid);
        if (!isPasswordValid) {
            setErrorPassword(input.validationMessage);
        } else {
            setErrorPassword('');
        }
    };

    function handleChangeEmail(evt) {
        const input = evt.target;
        setEmailValue(input.value);
        setEmailValidity(input.validity.valid);
        if (!isEmailValid) {
            setErrorEmail(input.validationMessage);
        } else {
            setErrorEmail('');
        }
    };

    function handleSubmit(evt) {
        evt.preventDefault();

        handleLogin(passwordValue, emailValue)
    }

    return (

        <section className="login">
            <div className='login__container'>
                <Link className='login__logo-link' to='/'><img className="login__logo" src={logo} alt="Лого" /></Link>
                <h1 className='login__title'>Рады видеть!</h1>
                <form onSubmit={handleSubmit} className='login__form'>

                    <p className='login__input-name'>E-mail</p>
                    <input id="email-input-id" onChange={handleChangeEmail} value={emailValue} name='email' type='email' className='login__email-input login__input input' autoComplete="off" required />
                    <span className='register__error-text'>{errorEmail}</span>

                    <p className='login__input-name'>Пароль</p>
                    <input id="password-input-id" onChange={handleChangePassword} minLength={4} maxLength={20} value={passwordValue} name='password' type='password' className='login__password-input login__input input' required />
                    <span className='register__error-text'>{errorPassword}</span>

                    <button disabled={!(isEmailValid && isPasswordValid)} className={(isEmailValid && isPasswordValid) ? 'login__button' : 'login__button-in'} type='submit' /*className='login__button'*/>Войти</button>
                </form>
                <div className="login__signup">
                    <p className="login__signup-text">Ещё не зарегистрированы?</p>
                    <Link to="/sign-up" className="login__register-link">Регистрация</Link>
                </div>
            </div>
        </section>

    );
}

export default Login;