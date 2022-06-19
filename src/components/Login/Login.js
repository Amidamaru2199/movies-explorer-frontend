import React from 'react';
import '../../vendor/normalize.css';
import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Login() {
    return (

        <section className="login">
            <div className='login__container'>
                <form className='login__form'>
                    <img className="login__logo" src={logo} alt="Лого" />
                    <h1 className='login__title'>Рады видеть!</h1>

                    <p className='login__input-name'>E-mail</p>
                    <input type='email' required autoComplete="off" className='login__email-input login__input input' />

                    <p className='login__input-name'>Пароль</p>
                    <input type='password' required className='login__password-input login__input input' />

                    <button className='login__button'>Войти</button>
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