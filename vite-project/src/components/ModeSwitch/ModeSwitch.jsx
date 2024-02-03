import { IoToggleSharp } from "react-icons/io5";
import "./ModeSwitch.css";
export default function ModeSwitch() {
  return (
    <div className="container">
      <IoToggleSharp />
      <span className="dark-mode">DARK MODE | </span>
      <span className="dil">TÜRKÇE</span>
      <span className="as">'YE GEÇ</span>
    </div>
  );
}
