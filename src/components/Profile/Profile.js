import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import '../../vendor/normalize.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import './Profile.css';

function Profile({ handleLogOut, handleEditProfileClick }) {

    const currentUser = useContext(CurrentUserContext);

    return (

        <section className="profile">
            <div className='profile__container'>
                <h1 className='profile__title'>Привет, {currentUser.name}!</h1>
                <div className='profile__div'>
                    <p className='profile__p'>Имя</p>
                    <p className='profile__p'>{currentUser.name}</p>
                </div>
                <div className='profile__div'>
                    <p className='profile__p'>E-mail</p>
                    <p className='profile__p'>{currentUser.email}</p>
                </div>
                <button type='button' onClick={handleEditProfileClick} className='profile__edit-button'>Редактировать</button>
                <Link to='/' onClick={handleLogOut} className='profile__exit-button'>Выйти из аккаунта</Link>
            </div>
        </section>

    );
}

export default Profile;