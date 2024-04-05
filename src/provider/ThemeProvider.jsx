import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = darkModeMediaQuery.matches;
  const [currentTheme, setCurrentTheme] = useState(
    JSON.parse(localStorage.getItem("themeMode"))
  );
  localStorage.setItem("themeMode", JSON.stringify(currentTheme));
  const changeTheme = () => {
    setCurrentTheme((currentTheme) => !currentTheme);
  };
  const theme = {
    currentTheme,
    changeTheme,
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useChangeTheme = () => {
  const theme = useContext(ThemeContext);
  return theme;
};
