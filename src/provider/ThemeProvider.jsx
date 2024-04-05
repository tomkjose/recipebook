import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const isDarkMode = darkModeMediaQuery.matches;
  const storedTheme = JSON.parse(localStorage.getItem("themeMode"));
  const [currentTheme, setCurrentTheme] = useState(
    storedTheme !== null ? storedTheme : isDarkMode
  );

  const changeTheme = () => {
    setCurrentTheme((currentTheme) => !currentTheme);
  };

  useEffect(() => {
    localStorage.setItem("themeMode", JSON.stringify(currentTheme));
  }, [currentTheme]);

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
