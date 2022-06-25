import '../../vendor/normalize.css';
import "./App.css";
import Header from "../Header/Header"
import FilmsHeader from "../FilmsHeader/FilmsHeader";
import Promo from "../Promo/Promo";
import Main from "../Main/Main";
import NavTab from "../NavTab/NavTab";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
import Preloader from "../Preloader/Preloader"
import Profile from '../Profile/Profile';
import SavedFilm from '../SavedFilm/SavedFilm';
import React, { useEffect, useState } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory
} from "react-router-dom";
import { register, authorization, getUserInfo, editProfile } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import PopapProfile from '../PopapProfile/PopapProfile';
import InfoTooltip from '../InfoTooltip/InfoTooltip';

function App() {

  const [currentUser, setCurrentUser] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [moviesSearchValue, setMoviesSearchValue] = useState('');
  const [isShortFilm, setIsShortFilm] = useState(false);
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('jwt')));//наш стейт
  const history = useHistory();


  const handleChangeMoviesSearch = (value) => {
    setMoviesSearchValue(value);
    //console.log(value)
  };

  const handleChangeisShortFilm = (value) => {
    setIsShortFilm(!isShortFilm);
    console.log(isShortFilm)
  };

  useEffect(() => {
    tokenCheck();
  }, []);

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
              history.push('/movies')
            })
          setIsInfoTooltipPopupOpen(true)
          setIsSuccess(true)
          history.push('/movies')
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
          history.push('/movies')
        }

      })
      .catch((err) => { console.log(err) })
  };

  function handleLogOut() {
    localStorage.removeItem('jwt');
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
  };

  function handleUpdateUser(profileData) {
    editProfile(profileData, localStorage.getItem('jwt'))
      .then(profileData => {
        setCurrentUser(profileData)
        closeAllPopups()
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

          <ProtectedRoute path='/movies' loggedIn={loggedIn}>
            <div className='app__container'>
              <FilmsHeader />
              <SearchForm handleChangeisShortFilm={handleChangeisShortFilm} isShortFilm={isShortFilm} moviesSearchValue={moviesSearchValue} handleChangeMoviesSearch={handleChangeMoviesSearch} />
              <MoviesCardList isShortFilm={isShortFilm} moviesSearchValue={moviesSearchValue} />
              <Footer />
            </div>
          </ProtectedRoute>


          <ProtectedRoute path='/saved-movies' loggedIn={loggedIn}>
            <div className='app__container'>
              <FilmsHeader />
              <SearchForm />
              <SavedFilm />
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

          <Route path="/" >
            <Header loggedIn={loggedIn} />
            <Promo />
            <NavTab />
            <Techs />
            <AboutMe />
            <Portfolio />
            <Footer />
          </Route>

          {/* <Route path="*">
            <NotFound />
          </Route> */}

        </Switch>
        <PopapProfile
          isOpened={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          handleUpdateUser={handleUpdateUser}
        />

        <InfoTooltip isOpened={isInfoTooltipPopupOpen} onClose={closeAllPopups} isSuccess={isSuccess} />
      </CurrentUserContext.Provider>
    </div >
  );
}

export default App;
