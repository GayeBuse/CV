import "./Hero.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import gbo from "./gbo.jpeg";
export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-girl">
          <p>Gaye Buse Özkan</p>
        </div>
        <div className="hero-left">
          <div className="baslik">
            <h1>Creative thinker Minimalism lover</h1>
            <p>
              Hi, I’m Almila. I’m a full-stack developer. If you are looking for
              a Developer who to craft solid and scalable frontend products with
              great user experiences. Let’s shake hands with me.
            </p>
          </div>
          <div className="buton">
            <button className="buton1">
              <span>Hire Me</span>
            </button>
            <button className="buton2">
              <FaGithub className="ikon" />
              <span>Github</span>
            </button>
            <button className="buton3">
              <FaLinkedinIn className="ikon" />
              <span>Linkedin</span>
            </button>
          </div>
        </div>
      </div>
      <div className="resim">
        <img className="gbo" src={gbo} />
      </div>
    </div>
  );
}
