import React, { useEffect } from 'react';

export const useLocalStorage = (key, defData) => {
  const [state, setState] = React.useState(() => {
    const localData = localStorage.getItem(key);
    return localData ?? defData;
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
};
