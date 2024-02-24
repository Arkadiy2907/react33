import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';

import imgLight from '../../assets/pic/sun.png';
import imgDark from '../../assets/pic/moon.png';
import styled from '@emotion/styled';

const ChooseSide = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <Button onClick={changeTheme}>
        <img src={theme === 'light' ? imgLight : imgDark} alt="theme" />
      </Button>
    </>
  );
};

export default ChooseSide;

const Button = styled.button`
  width: 3rem;
  height: 2.5rem;
  cursor: pointer;

  img {
    width: 2rem;
  }
`;
