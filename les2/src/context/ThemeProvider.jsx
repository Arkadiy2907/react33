import React, { useEffect, useState } from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const appStyled = document.querySelector('.AppStyled');

    if (appStyled) {
      if (theme === 'dark') {
        appStyled.style.backgroundColor = 'black';
        appStyled.style.color = 'white';
      } else {
        appStyled.style.backgroundColor = 'white';
        appStyled.style.color = 'black';
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {children}
    </ThemeContext.Provider>
  );
};
