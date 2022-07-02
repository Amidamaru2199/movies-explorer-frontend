import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './PopapProfile.css'

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

                default: {}
            }
        }
    }, [value, validations])

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

function PopupProfile({ isOpened, onClose, handleUpdateUser }) {
    const currentUser = useContext(CurrentUserContext);
    const email = useInput(currentUser.email || '', { isEmpty: true, minLength: 3, isEmail: true });
    const name = useInput(currentUser.name || '', { isEmpty: true, minLength: 5 });

    function handleSubmit(event) {
        event.preventDefault();

        handleUpdateUser({
            name: name.value,
            email: email.value,
        });
    }


    return (
        <div className={`popup popup_type_edit ${isOpened && 'popup_is-opened'}`}>
            <div className="popup_type_edit__container">
                <h2 className="popup__title">Редактирование профиля</h2>
                <form onSubmit={handleSubmit} className="popup__form">
                    <input
                        placeholder="Имя"
                        name="name"
                        type="text"
                        className="popup__input"
                        id="name-input-id"
                        autoComplete="off"
                        value={name?.value}
                        onChange={(e) => name.onChange(e)}
                        onBlur={(e) => name.onBlur(e)}
                    />
                    {(email.isDirty && email.isEmpty) && <span className='popup__error-text'>Поле не может быть пустым</span>}
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        className="popup__input"
                        id="email-input-id"
                        autoComplete="off"
                        value={email?.value}
                        onChange={(e) => email.onChange(e)}
                        onBlur={(e) => email.onBlur(e)}
                    />
                    {(email.isDirty && email.isEmpty) && <span className='popup__error-text'>Поле не может быть пустым</span>}
                    {(email.isDirty && email.emailError) && <span className='popup__error-text'>Некоректный email</span>}
                    <button type='submit' disabled={!email.inputValid || !name.inputValid} className={(email.inputValid && name.inputValid) ? 'popup__button' : 'popup__button-in'} >Применить</button>
                </form>
                <button type="button" onClick={onClose} className="popup__close-button" />
            </div>
        </div>
    )
}

export default PopupProfile