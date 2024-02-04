import "./Header.css";
import { LanguageContext } from "../../context/Language";
import { Link, animateScroll as scroll } from "react-scroll";
import { useContext } from "react";
export default function Header() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="header-container">
      <nav>
        <ul className="nav-links">
          <li className="nav-item1">
            <Link to="skills" smooth={true}>
              {language === "en" ? "Skills" : "Yetenekler"}
            </Link>
          </li>
          <li className="nav-item2">
            <Link to="projects" smooth={true} duration={3000}>
              {language === "en" ? "Projects" : "Projeler"}
            </Link>
          </li>
          <li className="nav-item3">
            <Link to="/HireMe">
              {language === "en" ? "Hire me" : "Beni İşe Al"}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
