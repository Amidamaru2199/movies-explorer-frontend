//import '../../vendor/normalize.css';
import "./App.css";
import Header from "../Header/Header"
import FilmsHeader from "../FilmsHeader/FilmsHeader";
// import Promo from "../Promo/Promo";
// import Main from "../Main/Main";
// import NavTab from "../NavTab/NavTab";
// import Techs from "../Techs/Techs";
// import AboutMe from "../AboutMe/AboutMe";
// import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Register from "../Register/Register";
import Login from "../Login/Login";
import NotFound from "../NotFound/NotFound";
//import Preloader from "../Preloader/Preloader"

function App() {
  return (
    <div className="App">
      <NotFound />
      {/* <Login /> */}
      {/* <FilmsHeader />
      <SearchForm />
      <MoviesCardList /> */}
      {/* <Promo />
      <NavTab />
      <Techs />
      <AboutMe />
      <Portfolio /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
