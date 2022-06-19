import React from 'react';
import '../../vendor/normalize.css';
import './Register.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

function Register() {
    return (

        <section className="register">
            <div className='register__container'>
                <img className="register__logo" src={logo} alt="Лого" />
                <h1 className='register__title'>Добро пожаловать!</h1>
                <form className='register__form'>
                    <p className='register__input-name'>Имя</p>
                    <input type='text' required className='register__name-input register__input input' />

                    <p className='register__input-name'>E-mail</p>
                    <input type='email' autoComplete="off" required className='register__email-input register__input input' />

                    <p className='register__input-name'>Пароль</p>
                    <input type='password' required className='register__password-input register__input input' />

                    <button type='submit' className='register__button'>Зарегистрироваться</button>
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