import "./Header.css";

import { Link, animateScroll as scroll } from "react-scroll";
export default function Header() {
  return (
    <div className="header-container">
      <nav>
        <ul className="nav-links">
          <li className="nav-item1">
            <Link to="skills" smooth={true}>
              Skills
            </Link>
          </li>
          <li className="nav-item2">
            <Link to="projects" smooth={true} duration={3000}>
              Projects
            </Link>
          </li>
          <li className="nav-item3">
            <Link to="/HireMe">Hire me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
