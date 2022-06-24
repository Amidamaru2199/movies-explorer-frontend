import React, { useContext, useEffect, useState } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './PopapProfile.css'
function PopupProfile({ isOpened, onClose, handleUpdateUser }) {


    const currentUser = useContext(CurrentUserContext);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        setName(currentUser.name);
        setEmail(currentUser.email);
    }, [currentUser, isOpened]);

    function handleChangeName(e) {
        setName(e.target.value);
    };

    function handleChangeEmail(e) {
        setEmail(e.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();

        handleUpdateUser({
            name,
            email,
        });
    }


    return (
        <div className={`popup popup_type_edit ${isOpened && 'popup_is-opened'}`}>
            <div className="popup__container">
                <h2 className="popup__title">456</h2>
                <form onSubmit={handleSubmit} className="popup__form">
                    <input
                        placeholder="Имя"
                        name="name"
                        type="text"
                        className="popup__input"
                        id="name-input-id"
                        autoComplete="off"
                        required
                        value={name}
                        onChange={handleChangeName}
                        minLength="2"
                        maxLength="40"
                    />
                    <span className="popup__error name-input-error"></span>
                    <input
                        placeholder="Email"
                        name="email"
                        type="email"
                        className="popup__input"
                        id="email-input-id"
                        autoComplete="off"
                        required
                        value={email}
                        onChange={handleChangeEmail}
                        minLength="2"
                        maxLength="200"
                    />
                    <span className="popup__error profession-input-error"></span>
                    <button className="popup__button" type="submit">123321</button>
                </form>
                <button type="button" onClick={onClose} className="popup__close-button" />
            </div>
        </div>
    )
}

export default PopupProfile