import React, { createContext, useState, useEffect } from "react";
// language context'i oluşturuluyor

export const LanguageContext = createContext();
export const LanguageContextProvider = ({ children }) => {
  const [language, setLanguage] = useState(
    localStorage.getItem("language") || "en"
  );
  // dil değiştirme fonksiyonu/tetiklendiğinde bana bunu yap

  const switchLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };
  useEffect(() => {
    localStorage.setItem("language", language);
    if (language === "tr") {
      document.documentElement.classList.add("tr");
    } else {
      document.documentElement.classList.remove("tr");
    }
    return () => {
      localStorage.removeItem("tr");
      document.documentElement.classList.remove("tr");
    };
  }, [language]);
  return (
    <LanguageContext.Provider value={{ language, setLanguage, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
