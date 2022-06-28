import React, { useEffect, useState } from 'react';
import '../../vendor/normalize.css';
import './SavedFilm.css';
import { getMovies } from '../../utils/MainApi';
import SavedMovieCard from '../SavedMovieCard/SavedMovieCard';

function SavedFilm({ isSavedShortFilm, savedMoviesSearchValue }) {


    const jwt = localStorage.getItem('jwt');

    const [moviesList, setMoviesList] = useState([]);
    /*const [filteredSavedMoviesList, setFilteredSavedMoviesList] = useState([]);*/


    useEffect(() => {

        sar()

    }, [isSavedShortFilm]);

    useEffect(() => {

        filter()

    }, [isSavedShortFilm]);

    const sar = () => {

        if (!isSavedShortFilm) {
            getMovies(jwt)
                .then((movies) => {
                    setMoviesList(movies);
                })

        }
    }

    const filter = () => {

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
                        moviesList.map((card) => <SavedMovieCard card={card} />)
                    }
                </div>
            </div>
        </div>

    );
}

export default SavedFilm;