import React, { useEffect, useState } from 'react';
import '../../vendor/normalize.css';
import './MoviesCardList.css';
import MovieCard from '../MovieCard/MovieCard';

function MoviesCardList({ isShortFilm, moviesSearchValue, moviesList }) {
    const [filteredMoviesList, setFilteredMoviesList] = useState(moviesList);
    console.log('MoviesCardList > filteredMoviesList', filteredMoviesList);
    console.log('MoviesCardList > moviesList', moviesList);
    const [numberOfItems, setNumberOfItems] = useState(func());
    const [number, setNumber] = useState(false);

    function handleClick() {
        setNumberOfItems(numberOfItems + func1())
    }

    function func1() {
        if (window.innerWidth >= 1280) {
            return 4;
        }
        if (window.innerWidth >= 768) {
            return 2;
        } if (window.innerWidth >= 320) {
            return 2;
        }
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

    //const numberOfItems = showMore ? filteredMoviesList.length : func();


    useEffect(() => {
        console.log('MoviesCardList > useEffect');
        filter(moviesSearchValue, isShortFilm, moviesList);
    }, [moviesSearchValue, isShortFilm, moviesList]);


    const filter = (moviesSearchValue, isShortFilm, moviesList) => {
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
                {numberOfItems < filteredMoviesList.length && <button onClick={handleClick} className={(filteredMoviesList.length === 0) ? 'movies-card-list__continuation-button_none' : 'movies-card-list__continuation-button'}>Еще</button>}
                {number && <p className='movies-card-list__err' >Ничего не найдено:)</p>}
            </div>
        </div>

    );
}

export default MoviesCardList;
