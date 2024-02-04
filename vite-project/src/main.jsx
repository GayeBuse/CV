import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import { DarkModeContextProvider } from "./context/DarkMode.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DarkModeContextProvider>
    <Router>
      <App />
    </Router>
  </DarkModeContextProvider>
);
