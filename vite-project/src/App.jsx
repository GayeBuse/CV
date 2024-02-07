import ModeSwitch from "./components/ModeSwitch/ModeSwitch";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Profile from "./components/Profile/Profile";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div class=" max-w-screen-xl mx-auto border">
        <div className="mx-auto ml-20 max-w-7xl ">
          <ModeSwitch />
          <Header />
          <Hero />
          <Skills />
          <Profile />
          <Projects />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
