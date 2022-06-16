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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  useHistory
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <NotFound /> */}
      {/* <FilmsHeader /> */}
      {/* <ShortFilm /> */}
      {/* <Profile /> */}
      {/* <SearchForm />
      <MoviesCardList /> */}
      <Switch>



        <Route path='/movies'>
          <FilmsHeader />
          <SearchForm />
          <MoviesCardList />
          <Footer />
        </Route>

        <Route path='/saved-movies'>
          <FilmsHeader />
          <SearchForm />
          <ShortFilm />
          <Footer />
        </Route>

        <Route path='/profile'>
          <Profile />
        </Route>

        <Route path='/sign-up'>
          <Register />
        </Route>

        <Route path='/sign-in'>
          <Login />
        </Route>

        <Route path="/">
          <Header />
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
