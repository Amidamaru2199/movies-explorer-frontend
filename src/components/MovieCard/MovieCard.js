import React, { useEffect, useState, useContext } from 'react';
import '../../vendor/normalize.css';
import './MovieCard.css';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { savedMovies, deleteMovies } from '../../utils/MainApi';

let cardID;
function MovieCard({ /*nameRU, url, duration, trailerLink*/ card, savedMoviesIds, updateSavedMoviesID }) {
    //const currentUser = useContext(CurrentUserContext);


    useEffect(() => {
        const savedMovieId = savedMoviesIds[card.id];
        setIsLiked(Boolean(savedMovieId))
    }, [savedMoviesIds, card.id])

    const savedMovieId = savedMoviesIds[card.id]
    const [isLiked, setIsLiked] = useState(Boolean(savedMovieId));
    const nomo = `https://api.nomoreparties.co/${card.image.url}`;

    localStorage.setItem('isLiked', isLiked);

    function cardLike() {
        const jwt = localStorage.getItem('jwt');
        if (isLiked) {
            setIsLiked(false);

            if (savedMovieId) {
                cardID = savedMovieId
            }

            deleteMovies(cardID, jwt).then((data) => {
                console.log('data', data);
                updateSavedMoviesID()

            })
        } else {
            setIsLiked(true);
            console.log('??', card);
            savedMovies(card, jwt)
                .then((savedCard) => {
                    console.log('>>', card)
                    cardID = savedCard._id
                    updateSavedMoviesID()
                })
        }
    }

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
            <a className='card__link' target="blank" href={card.trailerLink}><img className='card__image' src={nomo} alt='Промо фильма' /></a>
            <div className='ooo'><p className='card__text'>{card.nameRU}</p><button onClick={cardLike} className={isLiked ? 'card__like-button_active' : 'card__like-button'} /></div>
            <p className='card__duration'>{getTimeFromMins(card.duration)}</p>

        </div>
    );
}

export default MovieCard;