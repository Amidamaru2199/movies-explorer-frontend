import React, { useContext, useEffect, useState } from 'react';
import '../../vendor/normalize.css';
import './Login.css';
import logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';

const useValidation = (value, validations) => {

    const [isEmpty, setEmpty] = useState(true);
    const [minLengthErrror, setMinLengthError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(() => {
        for (const valiation in validations) {
            switch (valiation) {
                case 'minLength':

                    value.length < validations[valiation] ? setMinLengthError(true) : setMinLengthError(false)

                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true)
                    break;

                case 'isEmail':
                    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
            }
        }
    }, [value])

    useEffect(() => {
        if (isEmpty || minLengthErrror || emailError) {
            setInputValid(false)

        } else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthErrror, emailError])

    return {
        isEmpty,
        minLengthErrror,
        emailError,
        inputValid
    }
}

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations)

    const onChange = (event) => {
        setValue(event.target.value);
    }

    const onBlur = (event) => {
        setDirty(true)
    }

    return {
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
};

function Login({ handleLogin }) {

    const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true });
    const password = useInput('', { isEmpty: true, minLength: 6 });

    function handleSubmit(evt) {
        evt.preventDefault();

        handleLogin(password.value, email.value)
    }

    return (

        <section className="login">
            <div className='login__container'>
                <Link className='login__logo-link' to='/'><img className="login__logo" src={logo} alt="Лого" /></Link>
                <h1 className='login__title'>Рады видеть!</h1>
                <form onSubmit={handleSubmit} className='login__form'>

                    <p className='login__input-name'>E-mail</p>
                    <input id="email-input-id" onChange={(e) => email.onChange(e)} onBlur={(e) => email.onBlur(e)} value={email.value} name='email' type='email' className='login__email-input login__input input' autoComplete="off" required />
                    {(email.isDirty && email.isEmpty) && <span className='register__error-text'>Поле не может быть пустым</span>}
                    {(email.isDirty && email.emailError) && <span className='register__error-text'>Некоректный email</span>}

                    <p className='login__input-name'>Пароль</p>
                    <input id="password-input-id" onChange={(e) => password.onChange(e)} onBlur={(e) => password.onBlur(e)} value={password.value} name='password' type='password' className='login__password-input login__input input' required />
                    {(email.isDirty && email.isEmpty) && <span className='register__error-text'>Поле не может быть пустым</span>}
                    {(email.isDirty && email.minLengthErrror) && <span className='register__error-text'>Минимальное количество символов 6</span>}

                    <button disabled={!email.inputValid || !password.inputValid} className={(email.inputValid && password.inputValid) ? 'login__button' : 'login__button-in'} type='submit' /*className='login__button'*/>Войти</button>
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