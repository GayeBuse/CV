import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header-container">
      <nav>
        <ul className="nav-links">
          <li className="nav-item1">
            <Link to="/Skills">Skills</Link>
          </li>
          <li className="nav-item2">
            <Link to="/Projects">Projects</Link>
          </li>
          <li className="nav-item3">
            <Link to="/HireMe">Hire me</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
