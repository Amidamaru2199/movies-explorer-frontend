/* eslint-disable default-case */
import React, { useContext, useEffect, useState } from 'react';
import '../../vendor/normalize.css';
import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [emailError, setEmailError] = useState('Емеил не может быть пустым');
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.targrt.value).toLowerCase())) {
            setEmailError('Некорректный емейл')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.targrt.value.length < 3 || e.targrt.value.length > 8) {
            setPasswordError('Емейл должен быть длинее 3 и не короче 8')
            if (!e.target.value) {
                setPasswordError('Пароль не может быть пустым')
            }
        } else {
            setPasswordError('')
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email': setEmailDirty(true)
                break
            case 'password': setPasswordDirty(true)
                break
        }
    }

    return (

        <section className="login">
            <div className='login__container'>
                <form className='login__form'>
                    <img className="login__logo" src={logo} alt="Лого" />
                    <h1 className='login__title'>Рады видеть!</h1>

                    <p className='login__input-name'>E-mail</p>
                    <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name='email' type='text' className='login__email-input login__input input' />
                    {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}

                    <p className='login__input-name'>Пароль</p>
                    <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name='password' type='password' className='login__password-input login__input input' />
                    {(passwordDirty && passwordError) && <span>{passwordError}</span>}

                    <button disabled={!formValid} type='submit' className='login__button'>Войти</button>
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