import "./Footer.css";
import parmak from "./parmak.png";
import { Link } from "react-router-dom";
import { LanguageContext } from "../../context/Language";
import { useContext } from "react";
export default function Footer() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="footer-container">
      <div className="footer">
        {language === "en"
          ? "Let’s work together on your next product."
          : "Bir sonraki ürününüz üzerinde birlikte çalışalım."}
        <h1></h1>
      </div>
      <div className="footer-link">
        <div className="email">
          <img src={parmak} />
          <Link to="/mail" className="renk">
            gayebuseozkan@gmail.com
          </Link>
        </div>
        <div className="iletisim">
          <Link to="https://github.com/GayeBuse" target="_blank">
            Personal Blog
          </Link>
          <Link
            to="https://github.com/GayeBuse"
            target="_blank"
            className="yesil"
          >
            GitHub
          </Link>
          <Link
            to="https://www.linkedin.com/in/gaye-buse-%C3%B6zkan-66a711197/"
            target="_blank"
            className="mavi"
          >
            Linkedin
          </Link>
        </div>
      </div>
    </div>
  );
}
