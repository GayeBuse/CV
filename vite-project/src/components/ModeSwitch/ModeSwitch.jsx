import { IoToggleSharp } from "react-icons/io5";
import { useContext, useState } from "react";
import { DarkModeContext } from "../../context/DarkMode";
import "./ModeSwitch.css";
export default function ModeSwitch() {
  const { theme, toggleTheme } = useContext(DarkModeContext);
  const [localTheme, setLocalTheme] = useState(
    localStorage.getItem("theme") || theme
  ); /*tarayıcının yerel depolama alanından bir tema değeri almak ve bu değeri localTheme state'ine atamaktır. Eğer böyle bir değer yoksa veya geçersizse, varsayılan olarak theme adında başka bir değeri kullanmaktır*/
  const handleThemeChange = () => {
    setLocalTheme(theme === "light" ? "dark" : "light");
    toggleTheme();
    localStorage.setItem("theme", theme); //hangi adla depolanacak
  };
  return (
    <div className="mode-container">
      <button onClick={handleThemeChange}>
        <IoToggleSharp />
      </button>
      <span className="dark-mode">DARK MODE | </span>
      <span className="dil">TÜRKÇE</span>
      <span className="as">'YE GEÇ</span>
    </div>
  );
}
