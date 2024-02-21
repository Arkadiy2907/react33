const randomNum = () => Math.round((Math.random() + 1) * 10000);

const handleAddNum = (numbers, setNumbers) => {
  setNumbers([...numbers, randomNum()]);
};

const handleDelNum = (numbers, setNumbers, id) => {
  setNumbers(numbers && numbers.filter((el) => el !== id));
};

export { randomNum, handleAddNum, handleDelNum };
