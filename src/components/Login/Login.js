import React from 'react';
import '../../vendor/normalize.css';
import './Login.css';
import logo from '../../images/logo.svg';

function Login() {
    return (

        <section className="login">
            <div className='login__container'>
                <img className="login__logo" src={logo} alt="Лого" />
                <h1 className='login__title'>Добро пожаловать!</h1>

                <p className='login__input-name'>E-mail</p>
                <input className='login__email-input login__input input' />

                <p className='login__input-name'>Пароль</p>
                <input className='login__password-input login__input input' />

                <button className='login__button'>Войти</button>
                <div className="login__signup">
                    <p className="login__signup-text">Ещё не зарегистрированы?</p>
                    <a to="/sign-in" className="register__register-link">Регистрация</a>
                </div>
            </div>
        </section>

    );
}

export default Login;