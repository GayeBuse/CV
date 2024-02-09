import "./Skills.css";
import { LanguageContext } from "../../context/Language";
import { useContext } from "react";
import ProjectData from "../../ProjectData";
export default function Skills() {
  const { language } = useContext(LanguageContext);
  const data = ProjectData[language];
  return (
    <div className="skills-container">
      <div className="skills">{data.skills.title}</div>
      <div className="skills-list">
        <div className="java">
          <h1>{data.skills.JavaScript.title}</h1>
          <p>{data.skills.JavaScript.p1}</p>
        </div>
        <div className="React">
          <h1>{data.skills.React.title}</h1>
          <p>{data.skills.React.p1}</p>
        </div>
        <div className="Node">
          <h1>{data.skills.Node.title}</h1>
          <p>{data.skills.Node.p1}</p>
        </div>
      </div>
    </div>
  );
}
