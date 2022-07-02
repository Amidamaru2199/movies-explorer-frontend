import React, { useEffect, useState } from 'react';
import '../../vendor/normalize.css';
import './SavedFilm.css';
import { getMovies, deleteMovies } from '../../utils/MainApi';
import SavedMovieCard from '../SavedMovieCard/SavedMovieCard';

function SavedFilm({ isSavedShortFilm, savedMoviesSearchValue }) {
    const jwt = localStorage.getItem('jwt');

    // const [moviesList, setMoviesList] = useState([]);
    const [savedMoviesList, setSavedMoviesList] = useState([]);
    const [number, setNumber] = useState(false);
    const [filteredSavedMoviesList, setFilteredSavedMoviesList] = useState([]);

    function handleCardDelete(deletedCard) {
        deleteMovies(deletedCard._id, jwt).then(() => {
            const newSavedMoviesList = savedMoviesList.filter(card => card._id !== deletedCard._id)
            setSavedMoviesList(newSavedMoviesList);
            setFilteredSavedMoviesList(newSavedMoviesList);
        })
            .catch((err) => console.log(err))
    };


    useEffect(() => {
        getMovies(jwt)
            .then((movies) => {
                setSavedMoviesList(movies);
                setFilteredSavedMoviesList(movies);
            })
    }, [])

    useEffect(() => {
        filter(savedMoviesSearchValue, isSavedShortFilm, savedMoviesList)
    }, [savedMoviesSearchValue, isSavedShortFilm]);


    const filter = (moviesSearchValue, isShortFilm, moviesList) => {
        console.log('moviesSearchValue, isShortFilm, moviesList', moviesSearchValue, isShortFilm, moviesList);
        console.log('MoviesCardList > ', moviesSearchValue, isShortFilm);
        const keyword = moviesSearchValue.toLowerCase();
        if (keyword === '') {
            return;
        }
        let results = moviesList;

        results = results.filter((movies) => {
            return movies.nameRU.toLowerCase().includes(keyword);
        });

        if (results.length === 0) {
            setNumber(true)
        } else setNumber(false)

        if (isShortFilm) {
            results = results.filter((movies) => {
                return movies.duration < 40;
            })
        }

        if (results.length === 0) {
            setNumber(true)
        } else setNumber(false)

        setFilteredSavedMoviesList(results);
    };


    return (

        <div className='saved-film'>
            <div className='saved-film__container'>
                <div className='saved-film__cards'>
                    {
                        filteredSavedMoviesList.map((card, index) => <SavedMovieCard key={index} card={card} handleCardDelete={handleCardDelete} />)
                    }
                </div>
                {number && <div className='movies-card-list__err' >Ничего не найдено:)</div>}
            </div>
        </div>

    );
}

export default SavedFilm;