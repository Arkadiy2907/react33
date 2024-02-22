import Task1 from './components/task1/Task1';
import { AppStyled } from '../src/assets/styles/Task.styles';
import Task2 from './components/task2/Task2';

function App() {
  return (
    <AppStyled>
      <Task1 />
      <Task2 />
    </AppStyled>
  );
}

export default App;
