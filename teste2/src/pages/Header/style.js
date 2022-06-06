import styled from "styled-components";

export const Container = styled.div`
  margin-top: 15px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  h2 {
    margin-left: 30px;
    cursor: pointer;
  }

  nav {
    ul {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      margin-right: 30px;
      li {
        margin: 0 20px;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 400px) {
    flex-direction: column;

    h2 {
      margin-left: 0;
    }

    nav {
      ul {
        flex-direction: column;
        margin-top: 15px;
        margin-right: 0;

        li {
          margin: 10px 0;
        }
      }
    }
  }
`;
