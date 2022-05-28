import "./App.css"
import Header from "../Header/Header"
import Promo from "../Promo/Promo";
import Main from "../Main/Main";
import NavTab from "../NavTab/NavTab";
import Techs from "../Techs/Techs";
import AboutMe from "../AboutMe/AboutMe";
import Portfolio from "../Portfolio/Portfolio";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <NavTab />
      <Techs />
      <AboutMe />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
