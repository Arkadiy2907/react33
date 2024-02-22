// В ранее созданный классовый компонент нужно добавить проверку на содержимое в тексте инпута слова "реакт". Как только в процессе ввода в инпут текста будет введено слово "реакт", нужно задизейблить кнопку отправки формы. Если начать изменять введенную строку так, что в ней больше не будет слова "реакт", то нужно раздизейблить кнопку сабмита формы.
// Добавьте еще одну кнопку по нажатию на которую фокус будет выставляться в инпут.

import React from 'react';
import MyForms from './MyForms.jsx';
import { TaskStyled } from '../../assets/styles/Task.styles.js';

class Task1 extends React.Component {
  render() {
    return (
      <TaskStyled>
        <h2>Task 1</h2>
        <MyForms />
      </TaskStyled>
    );
  }
}

export default Task1;
