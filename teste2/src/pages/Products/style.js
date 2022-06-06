import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;

  .productList {
    border: 2px solid black;
    padding: 15px;
    margin: 10px;
    border-radius: 10px;
    width: 250px;
    text-align: center;
    img {
      width: 200px;
      height: 200px;
    }

    button {
      margin-top: 10px;
    }
  }
`;
