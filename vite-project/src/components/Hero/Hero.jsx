import "./Hero.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import gbo from "./gbo.jpeg";
import { LanguageContext } from "../../context/Language";
import { useContext } from "react";
import { Link } from "react-router-dom";
export default function Hero() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="hero-container">
      <div className="hero">
        <div className="hero-girl">
          <p>Gaye Buse Özkan</p>
        </div>
        <div className="hero-left">
          <div className="baslik">
            <h1>
              {language === "en"
                ? "Creative thinker Minimalism lover"
                : "Yaratıcı düşünür Minimalizm aşığı "}
            </h1>

            <p>
              {language === "en"
                ? " Hi, I’m Gaye Buse. I’m a full-stack developer. If you are looking for a Developer who to craft solid and scalable frontend products with great user experiences. Let’s shake hands with me."
                : "Merhaba, Ben Gaye Buse full-stack developer olarak iş aramaktayım. Eğer sağlam ve ölçeklenebilir ön uç ürünleri ve harika kullanıcı deneyimleri yaratmak istiyorsanız, Benimle el sıkışın."}
            </p>
          </div>
          <div className="buton">
            <Link className="buton1" to="/" target="_blank">
              {language === "en" ? "Hire me" : "Beni İşe Al"}
            </Link>
            <Link
              className="buton2"
              to="https://github.com/GayeBuse"
              target="_blank"
            >
              <FaGithub className="ikon" />
              Github
            </Link>
            <Link
              className="buton3"
              to="https://www.linkedin.com/in/gaye-buse-%C3%B6zkan-66a711197/"
              target="_blank"
            >
              <FaLinkedinIn className="ikon" />
              Linkedin
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
