import { useContext } from 'react';
import { ThemeContext } from '../../context/ThemeProvider';
import imgLight from '../../assets/pic/sun.png';
import imgDark from '../../assets/pic/moon.png';
import { ButtonChooseSide } from '../../assets/styles/Task.styles';

const ChooseSide = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const changeTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ButtonChooseSide onClick={changeTheme}>
      <img src={theme === 'light' ? imgLight : imgDark} alt="theme" />
    </ButtonChooseSide>
  );
};

export default ChooseSide;
