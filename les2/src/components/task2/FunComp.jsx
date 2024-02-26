import React, { useDeferredValue } from 'react';
import FunCompItem from './FunCompItem';
import { FunCompUl } from '../../assets/styles/Task.styles.js';
import * as helpFun from '../../assets/helpers/helpFun.js';

const FunComp = () => {
  const [numbers, setNumbers] = React.useState([1, 2, 13]);

  const getRandomNum = () => helpFun.randomNum();
  const addNum = () => helpFun.handleAddNum(numbers, setNumbers);
  const delNum = (id) => helpFun.handleDelNum(numbers, setNumbers, id);

  const deferredItems = useDeferredValue(numbers); //перевести при отображении во вторую очередь

  return (
    <>
      <FunCompUl>
        {deferredItems &&
          deferredItems.map((el) => (
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
