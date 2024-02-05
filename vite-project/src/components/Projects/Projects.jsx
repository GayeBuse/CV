import "./Projects.css";
import pizza from "./pizza.jpg";
import movie from "./movie.jpg";
import login from "./login.jpg";
import { Link } from "react-router-dom";
export default function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-baslik">
        <h1>Projects</h1>
      </div>
      <div className="projects">
        <div className="workintechh">
          <img className="resim1" src={pizza} />
          <div className="project-baslik">
            <h2>Workintech</h2>
            <p>
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
            <div>
              <button className="buttton1">react</button>
              <button className="buttton2">redux</button>
              <button className="buttton3">axios</button>
              <div className="link">
                <Link to="/HireMe">GitHub</Link>
                <Link to="/ViewSite">View Site</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="Random">
          <img className="resim2" src={movie} />
          <div className="project-baslik">
            <h2>Random Jokes</h2>
            <p>
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
          </div>
          <div>
            <button className="buttton1">react</button>
            <button className="buttton2">redux</button>
            <button className="buttton3">axios</button>
            <div className="link">
              <Link to="/HireMe">GitHub</Link>
              <Link to="/ViewSite">View Site</Link>
            </div>
          </div>
        </div>

        <div className="journey">
          <img className="resim3" src={login} />
          <div className="project-baslik">
            <h2>Journey</h2>
            <p>
              A simple, customizable, minimal setup cookie plugin that allows
              your users to select which cookies to accept or decline. This was
              created with vanilla JS, SCSS and Parcel Bundler and is available
              as a NPM package and the git repository makes any type of
              customization to code and themes possible.
            </p>
            <div>
              <button className="buttton1">react</button>
              <button className="buttton2">redux</button>
              <button className="buttton3">axios</button>
              <div className="link">
                <Link to="/HireMe">GitHub</Link>
                <Link to="/ViewSite">View Site</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
