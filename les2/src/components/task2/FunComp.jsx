import React from 'react';
import FunCompItem from './FunCompItem';
import { FunCompUl } from '../../assets/styles/Task.styles.js';
import * as helpFun from '../helpers/helpFun.js';

const FunComp = () => {
  const [numbers, setNumbers] = React.useState([1, 2, 13]);

  const getRandomNum = () => helpFun.randomNum();
  const addNum = () => helpFun.handleAddNum(numbers, setNumbers);
  const delNum = (id) => helpFun.handleDelNum(numbers, setNumbers, id);

  // componentDidMount
  React.useEffect(() => {
    console.log('компонент был отображен как componentDidMount');
  }, []); //вторым аргументом передается пустой массив чтоб не зачем более не следить

  // componentDidUpdate но выполнится и когда произойдет первый рендер
  React.useEffect(() => {
    console.log(
      'компонент был отображен как componentDidUpdate но без зависимости'
    );
  }); //вторым аргументом ни чего не передает но при каждом перерэндере будет изменяться, так делать не надо

  //componentDidUpdate только для numbers
  React.useEffect(() => {
    console.log(
      'следим за обновлением numbers отображен как componentDidUpdate'
    );
  }, [numbers]); //вторым аргументом передали numbers чтоб следить за ним, будет меняться только при изменении numbers

  // componentWillUnmount
  React.useEffect(() => {
    console.log(
      'если numbers.length === 0 то при перерендере будет componentWillUnmount'
    );
    return () => {
      //тут анонимная ф-я которая запускается при удалении
      if (numbers.length === 0) {
        console.log('componentWillUnmount');
      }
    };
  }, [numbers]);

  //useLayoutEffect выполняется синхронно после того, как компонент отрендерился, но перед тем,
  // как браузер отрисует изменения на экране.Это позволяет выполнять синхронные операции с DOM,
  // такие как измерение размеров элементов или манипуляции с классами CSS,
  // перед тем, как пользователь увидит изменения на экране

  React.useLayoutEffect(() => {
    console.log('useLayoutEffect');
  }, []); //сработает 2!!!

  console.log('обычный console.log()'); //сработает первым!!!

  return (
    <>
      <FunCompUl>
        {numbers &&
          numbers.map((el) => (
            <FunCompItem
              key={getRandomNum()}
              id={el}
              num={el}
              delNumber={delNum}
            />
          ))}
      </FunCompUl>
      <button onClick={addNum}>new num</button>
    </>
  );
};

export default FunComp;
