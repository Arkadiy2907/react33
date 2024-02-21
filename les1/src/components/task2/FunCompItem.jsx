const FunCompItem = ({ num, id, delNumber }) => {
  return (
    <li className="postItem">
      <p>number: {num}</p>
      <button onClick={() => delNumber(id)}>X</button>
    </li>
  );
};

export default FunCompItem;
