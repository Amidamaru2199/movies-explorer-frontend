import React from "react";
import "./Header.css";
import logo from '../../images/logo.svg'


function Header() {
    return (

        <header className="header">
            <div className="header__container">
                <img className="header__logo" src={logo} alt="Лого" />
                <div className="header__elements">
                    <button className="header__signup-button">Регистрация</button>
                    <button className="header__signin-button">Войти</button>
                </div>
            </div>
        </header>

    );
}

export default Header;