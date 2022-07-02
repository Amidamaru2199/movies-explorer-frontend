import '../../vendor/normalize.css';
import "./App.css";
import Header from "../Header/Header"
import FilmsHeader from "../FilmsHeader/FilmsHeader";
import Promo from "../Promo/Promo";
import NavTab from "../NavTab/NavTab";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import SearchFormSaved from "../SearchFormSaved/SearchFormSaved";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Profile from '../Profile/Profile';
import SavedFilm from '../SavedFilm/SavedFilm';
import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import { register, authorization, getUserInfo, editProfile } from '../../utils/MainApi';
import { getMovies } from '../../utils/MoviesApi';
import { getMovies as getSavedMovies } from '../../utils/MainApi';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import PopapProfile from '../PopapProfile/PopapProfile';
import InfoTooltip from '../InfoTooltip/InfoTooltip';
import InfoTooltipProfile from '../infoTooltipProfile/InfoTooltipProfile';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [isInfoTooltipProfilePopupOpen, setIsInfoTooltipProfilePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

  const [moviesList, setMoviesList] = useState([]);
  const [savedMoviesIds, setSavedMoviesIds] = useState([]);

  const [moviesSearchValue, setMoviesSearchValue] = useState(localStorage.getItem('moviesSearchValue') || '');
  const [isShortFilm, setIsShortFilm] = useState(localStorage.getItem('isShortFilm') === 'true');

  const [savedMoviesSearchValue, setSavedMoviesSearchValue] = useState('');
  const [isSavedShortFilm, setIsSavedShortFilm] = useState(false);

  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('jwt')));//наш стейт
  const [viewPreloader, setViewPreloader] = useState(true);
  const history = useHistory();



  const handleChangeMoviesSearch = (value) => {
    setMoviesSearchValue(value);
    localStorage.setItem('moviesSearchValue', value)
  };

  const handleChangeisShortFilm = (value) => {
    setIsShortFilm(!isShortFilm)

    const isShortFilmLS = localStorage.getItem('isShortFilm');
    if (!isShortFilmLS || isShortFilmLS === 'false') {
      localStorage.setItem('isShortFilm', 'true')
    } else {
      localStorage.setItem('isShortFilm', 'false')
    }
  };

  const handleChangeSavedMoviesSearch = (value) => {
    setSavedMoviesSearchValue(value);
    localStorage.setItem('savedMoviesSearchValue', value)
  };

  const handleChangeisSavedShortFilm = (value) => {
    setIsSavedShortFilm(!isSavedShortFilm);

    const isSavedShortFilmLS = localStorage.getItem('isSavedShortFilm');
    if (!isSavedShortFilmLS || isSavedShortFilmLS === 'false') {
      localStorage.setItem('isSavedShortFilm', 'true')
    } else {
      localStorage.setItem('isSavedShortFilm', 'false')
    }
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  useEffect(() => {
    if (!loggedIn) return;


    getMovies()
      .then((movies) => {
        setMoviesList(movies)
        setViewPreloader(false);
      })

    getSavedMovies(localStorage.getItem('jwt'))
      .then((savedMovies) => {
        const ids = savedMovies.reduce((ids, savedMovie) => {
          ids[savedMovie.movieId] = savedMovie._id
          return ids;
        }, {})
        setSavedMoviesIds(ids);
      })

  }, [loggedIn]);


  function tokenCheck() {
    if (!localStorage.getItem('jwt')) return;

    const jwt = localStorage.getItem('jwt');

    setIsSuccess(true);

    getUserInfo(jwt).then((res) => {
      if (!res) return;
      console.log(res)
      setCurrentUser(res);

      setLoggedIn(true);

      //history.push('/')
    })
      .catch((err) => { console.log(err) })
  };

  const handleRegister = (password, email, name) => {
    register(password, email, name)
      .then((res) => {
        if (res.error) {
          setIsInfoTooltipPopupOpen(true)
          setIsSuccess(false)
          return;
        }

        if (res) {
          authorization(password, email)
            .then((res) => {
              localStorage.setItem('jwt', res.token);
              getUserInfo(res.token);
              setLoggedIn(true);
              history.push('/movies');
              /*setIsInfoTooltipPopupOpen(true)
              setIsSuccess(true)*/
            })
        }
      }).catch((err) => { console.log(err) })
  };

  function handleLogin(password, email) {
    authorization(password, email)
      .then((res) => {
        console.log(res)
        if (res.message) {
          setIsInfoTooltipPopupOpen(true)
          setIsSuccess(false)
          return;
        }
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          getUserInfo(res.token);
          setLoggedIn(true);
          history.push('/movies')
        }
      })
      .catch((err) => { console.log(err) })
  };

  function handleLogOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('moviesSearchValue');
    localStorage.removeItem('isShortFilm');
    localStorage.removeItem('isSavedShortFilm');
    localStorage.removeItem('savedMoviesSearchValue');
    setMoviesSearchValue('');
    setIsShortFilm(false);
    setSavedMoviesSearchValue('');
    setIsSavedShortFilm(false);
    setLoggedIn(false);
    setCurrentUser({});
    history.push('/');
    console.log('Время выхода:', new Date().toLocaleTimeString());
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  };

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsInfoTooltipPopupOpen(false);
    setIsInfoTooltipProfilePopupOpen(false)
  };

  function handleUpdateUser(profile) {
    editProfile(profile, localStorage.getItem('jwt'))
      .then(profileData => {
        if (profileData.email === currentUser.email && profileData.name === currentUser.name) {
          setIsInfoTooltipProfilePopupOpen(true)
          setIsSuccess(false)
          return;
        }

        setCurrentUser(profileData)

        closeAllPopups()
        setIsInfoTooltipProfilePopupOpen(true)
        setIsSuccess(true)
      })
      .catch((err) => console.log(err))
  };

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>

          <Route path='/sign-up'>
            <Register handleRegister={handleRegister} />
          </Route>

          <Route path='/sign-in'>
            <Login handleLogin={handleLogin} />
          </Route>

          <ProtectedRoute path='/saved-movies' loggedIn={loggedIn}>
            <div className='app__container'>
              <FilmsHeader />

              <SearchFormSaved
                handleChangeisSavedShortFilm={handleChangeisSavedShortFilm}
                isSavedShortFilm={isSavedShortFilm}
                savedMoviesSearchValue={savedMoviesSearchValue}
                handleChangeSavedMoviesSearch={handleChangeSavedMoviesSearch}
              />

              <SavedFilm
                isSavedShortFilm={isSavedShortFilm}
                savedMoviesSearchValue={savedMoviesSearchValue}
              />

              <Footer />
            </div>
          </ProtectedRoute>

          <ProtectedRoute exact path='/movies' loggedIn={loggedIn}>
            <div className='app__container'>
              <FilmsHeader />

              <SearchForm
                handleChangeisShortFilm={handleChangeisShortFilm}
                isShortFilm={isShortFilm}
                moviesSearchValue={moviesSearchValue}
                handleChangeMoviesSearch={handleChangeMoviesSearch}
              />

              <MoviesCardList
                viewPreloader={viewPreloader}
                savedMoviesIds={savedMoviesIds}
                isShortFilm={isShortFilm}
                moviesList={moviesList}
                moviesSearchValue={moviesSearchValue}
              />

              <Footer />
            </div>
          </ProtectedRoute>

          <ProtectedRoute path='/profile' loggedIn={loggedIn}>
            <FilmsHeader />
            <Profile
              handleLogOut={handleLogOut}
              handleEditProfileClick={handleEditProfileClick}
            />
          </ProtectedRoute>

          <Route exact path="/" >
            <Header loggedIn={loggedIn} />
            <Promo />
            <NavTab />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

        </Switch>
        <PopapProfile
          isOpened={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          handleUpdateUser={handleUpdateUser}
        />
        <InfoTooltipProfile isOpened={isInfoTooltipProfilePopupOpen} onClose={closeAllPopups} isSuccess={isSuccess} />
        <InfoTooltip isOpened={isInfoTooltipPopupOpen} onClose={closeAllPopups} isSuccess={isSuccess} />
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App;
