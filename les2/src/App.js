import Task1 from './components/task1/Task1';
import Task2 from './components/task2/Task2';
import ChooseSide from './components/ChooseSide/ChooseSide';
import { ThemeProvider } from '../src/context/ThemeProvider';
import { AppStyled } from '../src/assets/styles/Task.styles';

function App() {
  return (
    <ThemeProvider>
      <AppStyled>
        <ChooseSide />
        <Task1 />
        <Task2 />
      </AppStyled>
    </ThemeProvider>
  );
}

export default App;
