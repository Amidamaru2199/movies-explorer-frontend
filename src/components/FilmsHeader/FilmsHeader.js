import React from "react";
import "./FilmsHeader.css";
import logo from '../../images/logo.svg';
import account from '../../images/account.svg';
import { Link } from "react-router-dom";


function FilmsHeader() {
    return (

        <header className="films-header">
            <div className="films-header__container">
                <Link to='/'><img className="films-header__logo" src={logo} alt="Лого" /></Link>
                <div className="films-header__elements">
                    <Link to='/movies' className="films-header__films">Фильмы</Link>
                    <Link to='/saved-movies' className="films-header__saved-films">Сохранённые фильмы</Link>
                    <Link to='/profile' className="films-header__account">Аккаунт</Link>
                    <img className="films-header__account-icon" src={account} alt='Иконка аккаунта' />
                </div>
                <div class="hamburger-menu header__hamburger-menu">
                    <input id="menu__toggle" type="checkbox" />
                    <label class="hamburger-menu__btn" for="menu__toggle">
                        <span></span>
                    </label>

                    <ul className="hamburger-menu__box">
                        <li><Link to='/' className="hamburger-menu__item" >Главная</Link></li>
                        <li><Link to='/movies' className="hamburger-menu__films">Фильмы</Link></li>
                        <li><Link to='/saved-movies' className="hamburger-menu__saved-films">Сохранённые фильмы</Link></li>
                        <div className="hamburger-menu__account-container">
                            <li><Link to='/profile' className="hamburger-menu__account">Аккаунт</Link></li>
                            <img className="hamburger-menu__account-icon" src={account} alt='Иконка аккаунта' />
                        </div>
                    </ul>
                </div>
            </div >
        </header >

    );
}

export default FilmsHeader;