import React from "react";
import "./FilmsHeader.css";
import logo from '../../images/logo.svg';
import account from '../../images/account.svg';


function FilmsHeader() {
    return (

        <header className="header">
            <div className="header__container">
                <img className="header__logo" src={logo} alt="Лого" />
                <div className="header__elements">
                    <a className="header__films" href='https://github.com'>Фильмы</a>
                    <a className="header__saved-films" href='https://github.com'>Сохранённые фильмы</a>
                    <a className="header__account" href='https://github.com'>Аккаунт</a>
                    <img className="header__account-icon" src={account} alt='Иконка аккаунта' />
                </div>
                <div class="hamburger-menu header__hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label class="hamburger-menu__btn" for="menu__toggle">
                        <span></span>
                    </label>

                    <ul class="hamburger-menu__box">
                        <li><a class="hamburger-menu__item" href='https://github.com'>Главная</a></li>
                        <li><a class="hamburger-menu__films" href='https://github.com'>Фильмы</a></li>
                        <li><a class="hamburger-menu__saved-films" href='https://github.com'>Сохранённые фильмы</a></li>
                        <div className="hamburger-menu__account-container">
                            <li><a class="hamburger-menu__account" href='https://github.com'>Аккаунт</a></li>
                            <img className="hamburger-menu__account-icon" src={account} alt='Иконка аккаунта' />
                        </div>
                    </ul>
                </div>
            </div>
        </header >

    );
}

export default FilmsHeader;