import React, { useEffect, useState } from 'react';
import '../../vendor/normalize.css';
import './MoviesCardList.css';
//import { getMovies } from '../../utils/MoviesApi';
import MovieCard from '../MovieCard/MovieCard';

function MoviesCardList({ isShortFilm, moviesSearchValue, moviesList }) {
    // const [moviesList, setMoviesList] = useState([]);
    const [filteredMoviesList, setFilteredMoviesList] = useState(moviesList);
    const [showMore, setShowMore] = useState(false);

    function handleClick() {
        setShowMore(true)
    }

    function func() {
        if (window.innerWidth >= 1280) {
            return 12;
        }
        if (window.innerWidth >= 768) {
            return 8;
        } if (window.innerWidth >= 320) {
            return 5;
        }
    }

    const numberOfItems = showMore ? filteredMoviesList.length : func();

    // useEffect(() => {
    //     getMovies()
    //         .then((movies) => {
    //             setMoviesList(movies)
    //             if (moviesSearchValue !== '') {
    //                 filter();
    //             }
    //         })
    //     /*const cards = JSON.parse(localStorage.getItem('cards'));*/
    // }, []);

    useEffect(() => {

        filter()

    }, [moviesSearchValue, isShortFilm]);

    const filter = () => {
        const keyword = moviesSearchValue.toLowerCase();
        if (keyword === '') {
            setFilteredMoviesList([])
            return
        }
        let results = moviesList;

        if (keyword !== '') {
            results = results.filter((movies) => {
                return movies.nameRU.toLowerCase().includes(keyword);
            });

            if (isShortFilm) {
                results = results.filter((movies) => {
                    return movies.duration < 40;
                })

            }
        }
        /*localStorage.setItem('cards', JSON.stringify(results));*/
        setFilteredMoviesList(results);
    };



    return (

        <div className='movies-card-list'>
            <div className='movies-card-list__container'>
                <div className='movies-card-list__cards'>
                    {
                        filteredMoviesList.slice(0, numberOfItems).map((card) => <MovieCard card={card} />)
                    }
                </div>
                <button onClick={handleClick} className={(filteredMoviesList.length === 0) ? 'movies-card-list__continuation-button_none' : 'movies-card-list__continuation-button'}>Еще</button>
            </div>
        </div>

    );
}

export default MoviesCardList;
