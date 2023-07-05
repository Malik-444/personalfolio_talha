import Experties from "./Components/Experties/Experties";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import css from "./styles/App.module.scss";
import Work1 from "./Components/Work/Work1"
import Portfolio from "./Components/Portfolio/Portfolio";
import People from "./Components/People/People";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      <Experties />
      <Work1 />
      <Portfolio />
      <People />
      <Footer />
    </div>
  );
};

export default App;
