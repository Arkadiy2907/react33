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
  margin-bottom: 10px;

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
  height: 8rem;
  max-height: 8rem;
  border: 1px solid gray;
  border-radius: 2px;
  padding: 5px;
  gap: 3px;
  overflow: hidden;
  margin: 0;

  button {
    width: 100%;
    cursor: pointer;
  }

  p {
    width: 96%;
    margin: 0;
    overflow: hidden;
  }
`;

export const FunCompUl = styled.ul`
  margin: 0;
  height: 15rem;
  max-height: 15rem;
  overflow-y: scroll;
  width: 15rem;
  padding: 0;
  border: solid 1px grey;
  border-radius: 2px;

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

export const ButtonChooseSide = styled.button`
  width: 3rem;
  height: 2.5rem;
  cursor: pointer;

  img {
    width: 2rem;
  }
`;
