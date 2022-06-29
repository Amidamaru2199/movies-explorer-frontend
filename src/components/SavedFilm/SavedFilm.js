import React, { useEffect, useState } from 'react';
import '../../vendor/normalize.css';
import './SavedFilm.css';
import { getMovies, deleteMovies } from '../../utils/MainApi';
import SavedMovieCard from '../SavedMovieCard/SavedMovieCard';

function SavedFilm({ isSavedShortFilm, savedMoviesSearchValue }) {


    const jwt = localStorage.getItem('jwt');

    const [moviesList, setMoviesList] = useState([]);
    /*const [filteredSavedMoviesList, setFilteredSavedMoviesList] = useState([]);*/

    function handleCardDelete(deletedCard) {

        deleteMovies(deletedCard._id, jwt).then(() => {

            setMoviesList(moviesList.filter(card => card._id !== deletedCard._id));
        })
            .catch((err) => console.log(err))
    };


    useEffect(() => {

        filter()

    }, [isSavedShortFilm]);



    const filter = () => {

        if (!isSavedShortFilm) {
            getMovies(jwt)
                .then((movies) => {
                    setMoviesList(movies);
                })

        }

        if (isSavedShortFilm) {
            const results = moviesList.filter((movies) => {
                return movies.duration < 40;
            })
            setMoviesList(results);
        }
    }


    return (

        <div className='saved-film'>
            <div className='saved-film__container'>
                <div className='saved-film__cards'>
                    {
                        moviesList.map((card) => <SavedMovieCard card={card} handleCardDelete={handleCardDelete} />)
                    }
                </div>
            </div>
        </div>

    );
}

export default SavedFilm;