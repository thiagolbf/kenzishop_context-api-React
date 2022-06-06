import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  margin-top: 50px;
  .cartList {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid black;
    padding: 15px;
    margin: 10px;
    border-radius: 10px;
    width: 400px;
    text-align: center;
    img {
      width: 200px;
      height: 200px;
    }

    button {
      margin-top: 10px;
    }
  }

  .cartResume {
    border: 2px solid black;
    height: 100px;
    padding: 10px;
    border-radius: 10px;
  }
`;
