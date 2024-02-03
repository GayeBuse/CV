import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="baslık">
        <h1>Profile</h1>
        <div className="profile-box">
          <div className="profile">
            <h1>Profile</h1>
            <div className="bilgi-cevap">
              <div className="bilgi">
                <p>Doğum tarihi </p>
                <p>İkamet Şehri</p>
                <p>Eğitim Durumu</p>
                <p>Tercih Ettiği Rol</p>
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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
              aut, odit laborum aliquam voluptatum nisi mollitia.
            </p>
            <p>
              Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod
              deserunt quam temporibus cumque magnam!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
