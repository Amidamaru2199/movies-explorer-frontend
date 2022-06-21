import React, { useContext, useEffect, useState } from 'react';
import '../../vendor/normalize.css';
import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register({ handleRegister }) {
    const [emailValue, setEmailValue] = useState('');
    const [nameValue, setNameValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const [isEmailValid, setEmailValidity] = useState(false);
    const [isNameValid, setNameValidity] = useState(false);
    const [isPasswordValid, setPasswordValidity] = useState(false);

    const [errorEmail, setErrorEmail] = useState('');
    const [errorName, setErrorName] = useState('');
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

    function handleChangeName(evt) {
        const input = evt.target;
        setNameValue(input.value);
        setNameValidity(input.validity.valid);
        if (!isNameValid) {
            setErrorName(input.validationMessage);
        } else {
            setErrorName('');
        }
    };

    function handleSubmit(evt) {
        evt.preventDefault();

        handleRegister(passwordValue, emailValue, nameValue)
    };

    return (

        <section className="register">
            <div className='register__container'>
                <Link to='/'><img className="register__logo" src={logo} alt="Лого" /></Link>
                <h1 className='register__title'>Добро пожаловать!</h1>
                <form onSubmit={handleSubmit} className='register__form'>

                    <p className='register__input-name'>Имя</p>
                    <input id="name-input-id" name='name' type='text' value={nameValue} onChange={handleChangeName} minLength={4} maxLength={20} className='register__name-input register__input input' required />
                    <span className='register__error-text'>{errorName}</span>

                    <p className='register__input-name'>E-mail</p>
                    <input id="email-input-id" name='email' type='email' value={emailValue} onChange={handleChangeEmail} className='register__email-input register__input input' autoComplete="off" required />
                    <span className='register__error-text'>{errorEmail}</span>

                    <p className='register__input-name'>Пароль</p>
                    <input id="password-input-id" name='password' type='password' value={passwordValue} onChange={handleChangePassword} minLength={4} maxLength={20} className='register__password-input register__input input' required />
                    <span className='register__error-text'>{errorPassword}</span>

                    <button type='submit' disabled={!(isEmailValid && isNameValid && isPasswordValid)} className={(isEmailValid && isNameValid && isPasswordValid) ? 'register__button' : 'register__button-in'} /*className='register__button'*/>Зарегистрироваться</button>

                </form>
                <div className="register__signin">
                    <p className="register__signin-text">Уже зарегистрированы?</p>
                    <Link to='/sign-in' className="register__login-link">Войти</Link>
                </div>
            </div>
        </section>

    );
}

export default Register;