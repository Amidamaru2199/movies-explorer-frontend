import React from 'react';
import '../../vendor/normalize.css';
import './Profile.css';

function Profile() {
    return (

        <section className="profile">
            <div className='profile__container'>
                <h1 className='profile__title'>Привет, Виталий!</h1>
                <div className='profile__div'>
                    <p className='profile__p'>Имя</p>
                    <p className='profile__p'>Vitaliy</p>
                </div>
                <div className='profile__div'>
                    <p className='profile__p'>E-mail</p>
                    <p className='profile__p'>hoztovari99@yandex.ru</p>
                </div>
                <a className='profile__edit-button'>Редактировать</a>
                <a className='profile__exit-button'>Выйти из аккаунта</a>
            </div>
        </section>

    );
}

export default Profile;