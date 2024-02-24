import React, { useEffect } from 'react';
import { useLocalStorage } from '../assets/hooks/useLocalStorage';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  useEffect(() => {
    const appStyled = document.querySelector('.AppStyled');

    if (appStyled) {
      if (theme === 'dark') {
        appStyled.style.backgroundColor = 'rgb(18, 0, 122)';
        appStyled.style.color = 'rgb(185, 185, 185)';
      } else {
        appStyled.style.backgroundColor = 'rgb(201, 201, 201)';
        appStyled.style.color = 'rgb(18, 0, 122)';
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
