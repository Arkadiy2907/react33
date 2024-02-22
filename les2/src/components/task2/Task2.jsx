// Создайте функциональный компонент и отрисуйте список, добавьте к нему ключи
// Потренируйтесь с React.Fragment и его сокращенной формой записи

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
