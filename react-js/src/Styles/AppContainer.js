import styled from "styled-components";

const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;

  & .header {
    height: 10%;
    padding: 0 20px;
    background-color: blue;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > h1 > a {
      color: white;
      text-decoration: none;
    }

    & > nav {
      display: flex;
      align-items: center;

      & > p {
        border-right: 2px solid white;
        padding: 2px 10px;
        font-size: 0.9rem;

        & > a {
          color: white;
          text-decoration: none;
        }

        &:hover {
          text-decoration: underline white;
          padding: 2px 15px;
          font-size: 1rem;
        }
      }
    }
  }

  & .body {
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .footer {
    height: 5%;
    background-color: blue;
    color: white;
    text-align: center;
  }
`;

export default AppContainer;
