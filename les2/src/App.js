import Task1 from './components/task1/Task1';
import Task2 from './components/task2/Task2';
import { ThemeProvider } from '../src/context/ThemeProvider';
import { AppStyled } from '../src/assets/styles/Task.styles';
import ResetStyles from './assets/styles/ResetStyles';

const App = () => {
  return (
    <ThemeProvider>
      <ResetStyles />
      <AppStyled className="AppStyled">
        <Task1 />
        <Task2 />
      </AppStyled>
    </ThemeProvider>
  );
};

export default App;
