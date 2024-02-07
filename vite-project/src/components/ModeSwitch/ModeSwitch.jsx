import { IoToggleSharp } from "react-icons/io5";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/DarkMode";
import { LanguageContext } from "../../context/Language";
import "./ModeSwitch.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ModeSwitch() {
  const { language, switchLanguage } = useContext(LanguageContext);
  const [localLanguage, setLocalLanguage] = useState(
    localStorage.getItem("language") || language
  );
  const { theme, toggleTheme } = useContext(DarkModeContext);
  const [localTheme, setLocalTheme] = useState(
    localStorage.getItem("theme") || theme
  ); /*tarayıcının yerel depolama alanından bir tema değeri almak ve bu değeri localTheme state'ine atamaktır. Eğer böyle bir değer yoksa veya geçersizse, varsayılan olarak theme adında başka bir değeri kullanmaktır*/
  const handleThemeChange = () => {
    setLocalTheme(theme === "light" ? "dark" : "light");
    toggleTheme();
    localStorage.setItem("theme", theme); //hangi adla depolanacak
    toast.success(`${theme === "light" ? "DARK MODE" : "LIGHT MODE"}`);
  };
  const handleSwitchLanguageChange = () => {
    setLocalLanguage(language === "tr" ? "en" : "tr");
    switchLanguage();
    localStorage.setItem("language", language);
    toast.success(`${language === "en" ? "TÜRKÇE" : "INGILIZCE"}`);
  };
  // Toastify mesajlarının stili
  const toastStyle = {
    backgroundColor: localTheme === "light" ? "#333" : "aliceblue",
    color: localTheme === "light" ? "#777777  " : "#333",
  };

  return (
    <>
      <div className="mode-container">
        <button onClick={handleThemeChange}>
          <IoToggleSharp />
        </button>
        <span className="dark-mode">
          {localTheme === "light" ? "LIGHT MODE" : "DARK MODE"}
        </span>
        |
        <span onClick={handleSwitchLanguageChange} className="dil">
          {localLanguage === "tr" ? "ENGILSH" : "TüRKÇE"}
        </span>
        <span className="as">'YE GEÇ</span>
      </div>
      <ToastContainer autoClose={2000} toastStyle={toastStyle} />
    </>
  );
}
