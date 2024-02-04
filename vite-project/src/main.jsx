import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { DarkModeContextProvider } from "./context/DarkMode.jsx";
import { LanguageContextProvider } from "./context/Language.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageContextProvider>
    <DarkModeContextProvider>
      <Router>
        <App />
      </Router>
    </DarkModeContextProvider>
  </LanguageContextProvider>
);
