import "./Skills.css";
import { LanguageContext } from "../../context/Language";
import { useContext } from "react";
export default function Skills() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="skills-container">
      <div className="skills">
        {language === "en" ? "Skills" : "Yetenekler"}
      </div>
      <div className="skills-list">
        <div className="java">
          <h1>Java Script</h1>
          <p>
            {language === "en"
              ? "With my skills in JavaScript, I develop interactive and user-friendly web applications."
              : "JavaScript konusundaki yeteneklerimle, interaktif ve kullanıcı dostu web uygulamaları geliştirmekteyim.  "}
          </p>
        </div>
        <div className="React">
          <h1>React.Js</h1>
          <p>
            {language === "en"
              ? "I create more modular and readable codes using React's newest features such as Hooks and Context API."
              : "Hooks, Context API gibi React'in en yeni özelliklerini kullanarak daha modüler ve okunabilir kodlar oluşturuyorum. "}
          </p>
        </div>
        <div className="Node">
          <h1>Node.Js</h1>
          <p>
            {language === "en"
              ? "By understanding the basic principles of Redux, I can manage the application state centrally and establish efficient communication between components."
              : " Redux'un temel prensiplerini anlayarak, uygulama state'ini merkezi bir şekilde yönetebilir, bileşenler arasında verimli bir iletişim kurabilirim. "}
          </p>
        </div>
      </div>
    </div>
  );
}
