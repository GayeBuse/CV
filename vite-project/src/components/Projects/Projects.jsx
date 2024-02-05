import "./Projects.css";

import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { LanguageContext } from "../../context/Language";

export default function Projects() {
  const { language } = useContext(LanguageContext);
  const [prData, setprData] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axios
        .get("https://09484b048ffd49baa210890a42213ba2.api.mockbin.io/")
        .then((response) => {
          const projectData =
            language === "en"
              ? response.data.ProjectData
              : response.data.ProjectDataTr;
          setprData(projectData);
        })
        .catch((error) => {
          console.error("Error fetching project data:", error);
        });
    };
    fetchData();
  }, [language]);
  //: Dil değiştiğinde çalışacak bir etkileşimli işlev tanımlar. Bu işlev, API'den veri almak ve dil bağlamına göre işlemek için kullanılır.
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
                      href={project.gitHub} //Bu özellik, bağlantının hedefini belirtir
                      target="_blank" //Bu özellik, bağlantının yeni bir tarayıcı sekmesinde veya penceresinde açılmasını sağlar
                    >
                      GitHub
                    </a>
                    <a href={project.ViewSite} target="_blank">
                      View Site
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
