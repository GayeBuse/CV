import "./Footer.css";
import parmak from "./parmak.png";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        <h1>Let’s work together on your next product.</h1>
      </div>
      <div className="footer-link">
        <div className="email">
          <img src={parmak} />
          <Link to="/mail" className="renk">
            gayebuseozkan@gmail.com
          </Link>
        </div>
        <div className="iletisim">
          <Link to="/Blog">Personal Blog</Link>
          <Link to="/Github" className="yesil">
            GitHub
          </Link>
          <Link to="/Linkedin" className="mavi">
            Linkedin
          </Link>
        </div>
      </div>
    </div>
  );
}
