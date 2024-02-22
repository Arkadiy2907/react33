import React from 'react';
import FunCompItem from './FunCompItem';
import { FunCompUl } from '../../assets/styles/Task.styles.js';
import * as helpFun from '../../assets/helpers/helpFun.js';

const FunComp = () => {
  const [numbers, setNumbers] = React.useState([1, 2, 13]);

  const getRandomNum = () => helpFun.randomNum();
  const addNum = () => helpFun.handleAddNum(numbers, setNumbers);
  const delNum = (id) => helpFun.handleDelNum(numbers, setNumbers, id);

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
