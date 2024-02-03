import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="baslık">Profile</div>
      <div className="profile-box">
        <p>Profile</p>
        <p>Doğum tarihi İkamet Şehri Eğitim Durumu Tercih Ettiği Rol</p>
        <p>
          24.03.1996 Ankara Hacettepe Ünv. Biyoloji Lisans, 2016 Frontend, UI
        </p>
      </div>
      <div className="about-box">
        <p>About Me</p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut,
          odit laborum aliquam voluptatum nisi mollitia. Mnima accusamus ratione
          soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus
          cumque magnam!{" "}
        </p>
      </div>
    </div>
  );
}
