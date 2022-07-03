import React, { useContext, useEffect, useState } from 'react';
import '../../vendor/normalize.css';
import './Register.css';
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

function Register({ handleRegister }) {

    const email = useInput('', { isEmpty: true, minLength: 3, isEmail: true });
    const password = useInput('', { isEmpty: true, minLength: 6 });
    const name = useInput('', { isEmpty: true, minLength: 5 });


    function handleSubmit(evt) {
        evt.preventDefault();

        handleRegister(password.value, email.value, name.value)
    };

    return (

        <section className="register">
            <div className='register__container'>
                <Link to='/'><img className="register__logo" src={logo} alt="Лого" /></Link>
                <h1 className='register__title'>Добро пожаловать!</h1>
                <form onSubmit={handleSubmit} className='register__form'>

                    <p className='register__input-name'>Имя</p>
                    <input id="name-input-id" name='name' type='text' value={name.value} onChange={(e) => name.onChange(e)} onBlur={(e) => name.onBlur(e)} className='register__name-input register__input input' />
                    {(email.isDirty && email.isEmpty) && <span className='register__error-text'>Поле не может быть пустым</span>}

                    <p className='register__input-name'>E-mail</p>
                    <input id="email-input-id" name='email' type='email' value={email.value} onChange={e => email.onChange(e)} onBlur={e => email.onBlur(e)} className='register__email-input register__input input' />
                    {(email.isDirty && email.isEmpty) && <span className='register__error-text'>Поле не может быть пустым</span>}
                    {(email.isDirty && email.emailError) && <span className='register__error-text'>Некоректный email</span>}

                    <p className='register__input-name'>Пароль</p>
                    <input id="password-input-id" name='password' type='password' value={password.value} onChange={e => password.onChange(e)} onBlur={e => password.onBlur(e)} className='register__password-input register__input input' />
                    {(email.isDirty && email.isEmpty) && <span className='register__error-text'>Поле не может быть пустым</span>}
                    {(email.isDirty && email.minLengthErrror) && <span className='register__error-text'>Минимальное количество символов 6</span>}

                    <button type='submit' disabled={!email.inputValid || !password.inputValid || !name.inputValid} className={(email.inputValid && password.inputValid && name.inputValid) ? 'register__button' : 'register__button-in'} >Зарегистрироваться</button>

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