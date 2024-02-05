import "./Projects.css";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LanguageContext } from "../../context/Language";

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const [prData, setprData] = useState([]);

  useEffect(() => {
    const fetchProjeAPI = async () => {
      try {
        const response = await axios.get(
          "https://9955e98aef00495a969d6be39f968649.api.mockbin.io/"
        );
        const projectData =
          language === "en"
            ? response.data.ProjectData
            : response.data.ProjectDataTR;
        setprData(projectData);
      } catch (error) {
        console.error("Error fetching project data:", error);
      }
    };

    fetchProjeAPI();
  }, [language]);

  return (
    <div className="projects-container">
      <div className="projects-baslik">
        <h1>Projects</h1>
      </div>
      <div className="projects">
        {prData &&
          prData.map((project, index) => (
            <div key={index} className="workintechh">
              <img className="resim1" src={project.img} alt={project.title} />
              <div className="project-baslik">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <div>
                  {project.skills.map((skill, index) => (
                    <button key={index} className={`buttton${index + 1}`}>
                      {skill}
                    </button>
                  ))}
                  <div className="link">
                    <a
                      href={project.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    {/* <a href={project.ViewSite} target="_blank" rel="noopener noreferrer">View Site</a> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
