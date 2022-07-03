import React from "react";
import "./Header.css";
import logo from '../../images/logo.svg'
import { Link, Route } from "react-router-dom";


function Header({ loggedIn }) {

    return (

        <header className="header">
            <div className="header__container">
                <img className="header__logo" src={logo} alt="Лого" />
                <div className="header__elements">
                    <Link to="/sign-up" className={loggedIn ? "header__profile-button-in" : "header__signup-button"} /*className="header__signup-button"*/>Регистрация</Link>
                    <Link to="/sign-in" className={loggedIn ? "header__profile-button-in" : "header__signin-button"} /*className="header__signin-button"*/>Войти</Link>

                    <Link to='/movies' className={loggedIn ? "header__films" : "header__films-in"} >Фильмы</Link>
                    <Link to='/saved-movies' className={loggedIn ? "header__saved-films" : "header__saved-films-in"} >Сохранённые фильмы</Link>
                    <Link to="/profile" className={loggedIn ? "header__profile-button" : "header__profile-button-in"}>Аккаунт</Link>
                </div>
            </div>
        </header>

    );
}

export default Header;