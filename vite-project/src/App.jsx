import ModeSwitch from "./components/ModeSwitch/ModeSwitch";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <div className="big-container">
        <div className="min-container">
          <ModeSwitch />
          <Header />
          <Hero />
          <Skills />
          <Profile />
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
