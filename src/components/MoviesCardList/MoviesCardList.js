import React, { useEffect, useState } from 'react';
import '../../vendor/normalize.css';
import './MoviesCardList.css';
import { getMovies } from '../../utils/MoviesApi';
import MovieCard from '../MovieCard/MovieCard';

function MoviesCardList({ isShortFilm, moviesSearchValue }) {

    //console.log('фильмлист', moviesSearchValue)

    const [moviesList, setMoviesList] = useState([]);
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

    useEffect(() => {
        getMovies()
            .then((movies) => {
                setMoviesList(movies)
                if (moviesSearchValue !== '') {
                    filter();
                }
                //console.log(movies);
            })

    }, []);

    useEffect(() => {
        filter()
        //console.log('filteredMoviesList', filteredMoviesList)
    }, [moviesSearchValue, isShortFilm]);

    const filter = () => {
        const keyword = moviesSearchValue.toLowerCase();
        if (keyword === '') {
            setFilteredMoviesList([])
            return
        }
        let results = moviesList;


        console.log('keyword', keyword)

        if (keyword !== '') {
            results = results.filter((movies) => {
                return movies.nameRU.toLowerCase().includes(keyword);
            });
            //console.log('resultsr', results)
            if (isShortFilm) {
                results = results.filter((movies) => {
                    return movies.duration < 40;
                })
            }
        }
        setFilteredMoviesList(results);
    };

    return (

        <div className='movies-card-list'>
            <div className='movies-card-list__container'>
                <div className='movies-card-list__cards'>
                    {
                        filteredMoviesList.slice(0, numberOfItems).map((card) => <MovieCard card={card} /*nameRU={card.nameRU} url={card.image.url} duration={card.duration} trailerLink={card.trailerLink}*/ />)
                    }
                </div>
                <button onClick={handleClick} className='movies-card-list__continuation-button'>Еще</button>
            </div>
        </div>

    );
}

export default MoviesCardList;

/*import React, { useEffect, useState } from 'react';
import '../../vendor/normalize.css';
import './MoviesCardList.css';
import promo from '../../images/promo.jpg'
import { getMovies } from '../../utils/MoviesApi';

function test(field) {
    return field.toLowerCase().trim()
}

function MoviesCardList({ moviesSearchValue }) {

    console.log('фильмлист', moviesSearchValue)

    const [moviesList, setMoviesList] = useState([]);
    const [filteredMoviesList, setFilteredMoviesList] = useState(moviesList);

    useEffect(() => {
        getMovies()
            .then((movies) => {
                setMoviesList(movies);
                console.log(movies);
            })
    }, []);

    useEffect(() => {
        filter()
        console.log('filteredMoviesList', filteredMoviesList)
    }, [moviesSearchValue]);

    const filter = () => {

        const keyword = test(moviesSearchValue);

        console.log('keyword', keyword)

        if (keyword !== '') {
            const results = moviesList.filter(({ nameRU, nameEN }) => {
                //return movies.nameRU.toLowerCase().includes(keyword) || movies.nameEN.toLowerCase().includes(keyword);
                return test(nameRU).includes(keyword) || test(nameEN).includes(keyword)

            });
            console.log('resultsr', results)
            setFilteredMoviesList(results);
        } else {
            setFilteredMoviesList(moviesList);
            // If the text field is empty, show all users
        }

        //setName(keyword);
    };

    return (

        <div className='movies-card-list'>
            <div className='movies-card-list__container'>
                <div className='movies-card-list__cards'>
                    {/* {filteredMoviesList} 
                    {
                        filteredMoviesList.map((card) => (<div>{card.nameRU}</div>))
                    }*/