import "./Hero.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import gbo from "./gbo.png";
import { LanguageContext } from "../../context/Language";
import { useContext } from "react";
import { Link } from "react-router-dom";
import ProjectData from "../../ProjectData";
export default function Hero() {
  const { language } = useContext(LanguageContext);
  const data = ProjectData[language];
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-girl">
          <p>Gaye Buse Özkan</p>
        </div>
        <div className="hero-left">
          <div className="baslik">
            <h1>{data.hero.h1}</h1>

            <p>{data.hero.p1}</p>
          </div>
          <div className="buton">
            <Link className="buton1" to="/" target="_blank">
              {data.hero.button1}
            </Link>
            <Link
              className="buton2"
              to="https://github.com/GayeBuse"
              target="_blank"
            >
              <FaGithub className="ikon" />
              {data.hero.button2}
            </Link>
            <Link
              className="buton3"
              to="https://www.linkedin.com/in/gaye-buse-%C3%B6zkan-66a711197/"
              target="_blank"
            >
              <FaLinkedinIn className="ikon" />
              {data.hero.button3}
            </Link>
          </div>
        </div>
      </div>
      <div className="resim">
        <img className="gbo" src={gbo} />
      </div>
    </div>
  );
}
