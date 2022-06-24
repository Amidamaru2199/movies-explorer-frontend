import React, { useEffect, useState } from 'react';
import '../../vendor/normalize.css';
import './SavedFilm.css';
import { getMovies } from '../../utils/MainApi';
import SavedMovieCard from '../SavedMovieCard/SavedMovieCard';

function SavedFilm() {

    const [moviesList, setMoviesList] = useState([]);
    const jwt = localStorage.getItem('jwt');

    useEffect(() => {
        getMovies(jwt)
            .then((movies) => {
                setMoviesList(movies);
            })
    }, []);

    return (

        <div className='saved-film'>
            <div className='saved-film__container'>
                <div className='saved-film__cards'>
                    {
                        moviesList.map((card) => <SavedMovieCard card={card} />)
                    }

                    {/* <div className='card saved-film__card'>
                        <img className='card__image' src={promo} alt='Промо фильма' />
                        <div className='ooo'><p className='card__text'>33 слова о дизайне</p><button className='card__delete-button' /></div>
                        <p className='card__duration'>1ч42м</p>
                    </div>

                    <div className='card saved-film__card'>
                        <img className='card__image' src={promo} alt='Промо фильма' />
                        <div className='ooo'><p className='card__text'>33 слова о дизайне</p><button className='card__delete-button' /></div>
                        <p className='card__duration'>1ч42м</p>
                    </div>

                    <div className='card saved-film__card'>
                        <img className='card__image' src={promo} alt='Промо фильма' />
                        <div className='ooo'><p className='card__text'>33 слова о дизайне</p><button className='card__delete-button' /></div>
                        <p className='card__duration'>1ч42м</p>
                    </div> */}

                </div>
            </div>
        </div>

    );
}

export default SavedFilm;