import "./Profile.css";
import { LanguageContext } from "../../context/Language";
import { useContext } from "react";
export default function Profile() {
  const { language } = useContext(LanguageContext);
  return (
    <div className="profile-container">
      <div className="baslık">
        <h1>{language === "en" ? "Profile" : "Profil"}</h1>
        <div className="profile-box">
          <div className="profile">
            <h1> {language === "en" ? "Profile" : "Profil"}</h1>
            <div className="bilgi-cevap">
              <div className="bilgi">
                <p>{language === "en" ? "Date of birth" : "Doğum tarihi"}</p>
                <p>
                  {language === "en" ? "City of Residence" : "İkamet Şehri"}
                </p>
                <p>
                  {language === "en" ? "City of Residence" : "Eğitim Durumu"}
                </p>
                <p>
                  {language === "en" ? "Preferred Role" : "Tercih Ettiği Rol"}
                </p>
              </div>
              <div className="cevap">
                <p>24.03.1999</p>
                <p>Bursa</p>
                <p>Mimarlık Fakültesi,2023</p>
                <p>Frontend UI</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-box">
        <div className="About">
          <h1>About Me</h1>

          <div className="hakkımda">
            <p>
              {language === "en"
                ? "In addition to the experiences I gained at the Faculty of Architecture, my interest in future technologies and my curiosity in software development brought about the desire to embark on a new path in my career."
                : "Mimarlık Fakültesinde edindiğim tecrübelerim yanı sıra geleceğin teknolojilerine olan ilgim ve yazılım geliştirmeye olan merakım, kariyerimde yeni bir yola çıkma arzusunu beraberinde getirdi. "}
            </p>
            <p>
              {language === "en"
                ? "The Workintech training course further strengthened my interest in software development."
                : " Workintech eğitim kursunda yazılım geliştirmeye olan ilgimi daha da pekiştirdi."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
