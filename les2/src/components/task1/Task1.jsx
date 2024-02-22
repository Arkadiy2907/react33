// Создайте классовый компонент. В нем реализуйте форму с инпутом и кнопкой.
// Добавьте state и потренируйтесь его изменять через this.setState()

import React from 'react';
import ControlledState from './ControlledState';
import NotControlledState from './NotControlledState';
import { TaskStyled } from '../../assets/styles/Task.styles.js';

class Task1 extends React.Component {
  render() {
    return (
      <TaskStyled>
        <h2>Task 1</h2>
        <ControlledState />
        <NotControlledState />
      </TaskStyled>
    );
  }
}

export default Task1;
