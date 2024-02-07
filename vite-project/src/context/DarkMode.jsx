// DarkModeContextProvider bileşenini kullanarak tema bilgisini hem localStorage'a hem de context'e kaydet
import React, { createContext, useState, useEffect } from "react";

// DarkMode context'i oluşturuluyor
export const DarkModeContext = createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  // Temayı değiştirme fonksiyonu/tetiklendiğinde bana bunu yap
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  useEffect(() => {
    // Temayı localStorage'a kaydet
    localStorage.setItem("theme", theme);

    // Sayfanın temasını değiştir
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    /*Eğer theme değişkeninin değeri "dark" ise, sayfa "dark" sınıfına sahip olur ve geçerli tema bu sınıfı kullanarak uygulanır. Aksi halde, "dark" sınıfı kaldırılarak sayfa teması normal duruma getirilir.*/
    // Bileşen yok olduğunda temayı temizle
    return () => {
      localStorage.removeItem("theme");
      document.documentElement.classList.remove("dark");
    };
  }, [theme]);

  return (
    <DarkModeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};
export const useDarkMode = () => useContext(DarkModeContext);
