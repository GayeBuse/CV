import React, { useContext } from "react";
import { LanguageContext } from "../../context/Language";
import ProjectData from "../../ProjectData";
import { Link, animateScroll as scroll } from "react-scroll";
import "./Header.css";

const Header = () => {
  const { language } = useContext(LanguageContext);
  const data = ProjectData[language];
  /*Bu kod, "ProjectData" adındaki bir nesneyi kullanarak language değişkeninin değerine göre ilgili veriyi almayı amaçlar.*/

  return (
    <div className="header-container">
      <nav>
        <ul className="nav-links">
          <li className="nav-item1">
            <Link to="skills" smooth={true}>
              {data.header.Skills}
            </Link>
          </li>
          <li className="nav-item2">
            <Link to="projects" smooth={true} duration={3000}>
              {data.header.Projects}
            </Link>
          </li>
          <li className="nav-item3">
            <Link to="/HireMe">
              <button>{data.header.Hireme}</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
