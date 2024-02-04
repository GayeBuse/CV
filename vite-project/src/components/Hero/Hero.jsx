import "./Hero.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import gbo from "./gbo.jpeg";
import { LanguageContext } from "../../context/Language";
import { useContext } from "react";
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
            <button className="buton1">
              <span>{language === "en" ? "Hire me" : "Beni İşe Al"}</span>
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
