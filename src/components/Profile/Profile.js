import React from 'react';
import { Link } from 'react-router-dom';
import '../../vendor/normalize.css';
import './Profile.css';

function Profile({ handleLogOut, userEmail, userName }) {
    return (

        <section className="profile">
            <div className='profile__container'>
                <h1 className='profile__title'>Привет, Виталий!</h1>
                <div className='profile__div'>
                    <p className='profile__p'>Имя</p>
                    <p className='profile__p'>{userName}</p>
                </div>
                <div className='profile__div'>
                    <p className='profile__p'>E-mail</p>
                    <p className='profile__p'>{userEmail}</p>
                </div>
                <button type='button' className='profile__edit-button'>Редактировать</button>
                <Link to='/' onClick={handleLogOut} className='profile__exit-button'>Выйти из аккаунта</Link>
            </div>
        </section>

    );
}

export default Profile;