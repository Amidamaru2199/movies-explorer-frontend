import React from "react";
import "./Header.css";
import logo from '../../images/logo.svg'
import { Link, Route } from "react-router-dom";


function Header() {
    return (

        <header className="header">
            <div className="header__container">
                <img className="header__logo" src={logo} alt="Лого" />
                <div className="header__elements">
                    <Link to="/sign-up" className="header__signup-button">Регистрация</Link>
                    <Link to="/sign-in" className="header__signin-button">Войти</Link>
                </div>
            </div>
        </header>

    );
}

export default Header;