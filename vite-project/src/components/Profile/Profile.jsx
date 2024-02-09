import "./Profile.css";
import { LanguageContext } from "../../context/Language";
import { useContext } from "react";
import ProjectData from "../../ProjectData";
export default function Profile() {
  const { language } = useContext(LanguageContext);
  const data = ProjectData[language];
  return (
    <div className="profile-container">
      <div className="baslık">
        <h1>{data.profile.title}</h1>
        <div className="profile-box">
          <div className="profile">
            <h1> {data.profile.dg.h2}</h1>
            <div className="bilgi-cevap">
              <div className="bilgi">
                <p>{data.profile.dg.birthdatekey}</p>
                <p>{data.profile.dg.locationkey}</p>
                <p>{data.profile.dg.edukey}</p>
                <p>{data.profile.dg.rolekey}</p>
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
          <h1>{data.profile.aboutme.title}</h1>

          <div className="hakkımda">
            <p>{data.profile.aboutme.p1}</p>
            <p>{data.profile.aboutme.p2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
