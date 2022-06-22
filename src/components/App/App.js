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
import ShortFilm from '../ShortFilm/ShortFilm';
import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory
} from "react-router-dom";
import { register, authorization, getEmail, getName } from '../../utils/MainApi';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';

function App() {

  const [userEmail, setUserEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem('jwt')));//наш стейт
  const history = useHistory();

  useEffect(() => {//наш юс еффект
    tokenCheck();
  }, []);

  function tokenCheck() {//тоже что-то наше
    if (!localStorage.getItem('jwt')) return;

    const jwt = localStorage.getItem('jwt');

    //setIsSuccess(true);

    getEmail(jwt).then((res) => {
      if (!res) return;

      setUserEmail(res.email)

      setLoggedIn(true);

      //history.push('/')
    })
    getName(jwt).then((res) => {
      if (!res) return;

      setUserName(res.name)
    })
      .catch((err) => { console.log(err) })
  };

  const handleRegister = (password, email, name) => {
    register(password, email, name)
      .then((res) => {

        if (res) {
          history.push('/sign-in')
        }
      }).catch((err) => { console.log(err) })
  };

  function handleLogin(password, email) {
    authorization(password, email)
      .then((res) => {
        console.log(res)
        /*if (res.message) {
          setIsInfoTooltipPopupOpen(true)
          setIsSuccess(false)
          return;
        }*/
        if (res.token) {
          localStorage.setItem('jwt', res.token);
          setLoggedIn(true);
          history.push('/movies')
          /*setUserEmail(email)*/
        }
      })
      .catch((err) => { console.log(err) })
  };

  function handleLogOut() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
    //setUserEmail('');
    history.push('/');
    console.log('Время выхода:', new Date().toLocaleTimeString());
  }

  return (
    <div className="App">
      <Switch>

        <Route path='/sign-up'>
          <Register handleRegister={handleRegister} />
        </Route>

        <Route path='/sign-in'>
          <Login handleLogin={handleLogin} />
        </Route>

        <ProtectedRoute path='/movies' loggedIn={loggedIn}>
          <FilmsHeader />
          <SearchForm />
          <MoviesCardList />
          <Footer />
        </ProtectedRoute>


        <ProtectedRoute path='/saved-movies' loggedIn={loggedIn}>
          <FilmsHeader />
          <SearchForm />
          <ShortFilm />
          <Footer />
        </ProtectedRoute>

        <ProtectedRoute path='/profile' loggedIn={loggedIn}>
          <FilmsHeader />
          <Profile handleLogOut={handleLogOut} userEmail={userEmail} userName={userName} />
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


      </Switch>

    </div>
  );
}

export default App;
