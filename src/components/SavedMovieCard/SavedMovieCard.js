import React, { useEffect, useState, useContext } from 'react';
import '../../vendor/normalize.css';
import './SavedMovieCard.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { deleteMovies } from '../../utils/MainApi';

function SavedMovieCard({ card, handleCardDelete }) {

    const currentUser = useContext(CurrentUserContext);

    /*function moveDeleteHandler() {
        const jwt = localStorage.getItem('jwt');
        deleteMovies(card._id, jwt);
    }*/

    function handleDeleteClick() {
        handleCardDelete(card);
    };

    function getTimeFromMins(mins) {
        if (mins === 60) {
            return mins / 60 + 'ч';
        }
        if (mins < 60) {
            return mins + 'м';
        }

        else {
            let hours = Math.trunc(mins / 60);
            let minutes = mins % 60;
            return hours + 'ч' + minutes + 'м';
        }
    };

    return (
        <div className='card movies-card-list__card'>
            <a className='card__link' target="blank" href={card.trailerLink}><img className='card__image' src={card.image} alt='Промо фильма' /></a>
            <div className='ooo'><p className='card__text'>{card.nameRU}</p><button onClick={handleDeleteClick} className='card__delete-button' /></div>
            <p className='card__duration'>{getTimeFromMins(card.duration)}</p>

        </div>
    );
}

export default SavedMovieCard;