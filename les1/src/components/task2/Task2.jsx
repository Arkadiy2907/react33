// Реализуйте все методы жизненного цикла. Добавьте в них console.log,
//  чтобы увидеть когда они будут вызываться.
// Можете добавить дочерний компонент. Потренируйтесь с прокидыванием в него пропсов разного типа.

import React from 'react';
import FunComp from './FunComp';
import { TaskStyled } from '../../assets/styles/Task.styles.js';

const Task2 = () => {
  return (
    <TaskStyled>
      <h2>Task 2</h2>
      <FunComp />
    </TaskStyled>
  );
};

export default Task2;
