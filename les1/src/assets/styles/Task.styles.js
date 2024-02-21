import styled from '@emotion/styled';

export const AppStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
`;

export const TaskStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  padding: 5px;
  margin-bottom: 5px;

  h2 {
    margin: 0;
  }
`;

export const MyInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: hidden;
  width: 12rem;
  max-width: 12rem;
  height: 7rem;
  max-height: 7rem;
  border: 1px solid gray;
  border-radius: 10px;
  padding: 5px;
  gap: 3px;
  overflow: hidden;
  margin: 0;

  button {
    width: 100%;
    cursor: pointer;
  }

  input,
  p {
    width: 96%;
    margin: 0;
    overflow: hidden;
  }
`;

export const FunCompUl = styled.ul`
  height: 15rem;
  max-height: 15rem;
  overflow-y: auto;
  width: 21rem;
  padding: 0;

  li {
    display: flex;
    justify-content: space-between;
    list-style-type: none;
    padding: 2px;

    button {
      width: 3rem;
      cursor: pointer;
    }
  }
`;
