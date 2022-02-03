import styled from "styled-components";

const LoginContainer = styled.div`
  width: 30%;
  height: 100%;
  text-align: center;

  & > h1 {
    margin: 20px;
  }

  & > form {
    height: 50%;
    padding: 20px;
    border: 2px solid black;
    border-radius: 10px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;

    & > label {
      width: 100%;
      height: 70px;

      text-align: left;
      & > input {
        width: 100%;
        height: 25px;
      }

      & .err {
        font-size: 0.8rem;
        color: red;
      }
    }

    & > div {
      width: 100%;

      > button {
        width: 30%;
        height: 30px;
        border: none;
        border-radius: 5px;
        background-color: blue;
        color: white;

        &:hover {
          cursor: pointer;
          border: 1px solid black;
          background-color: rgba(0, 0, 255, 0.5);
          color: black;
        }
      }
    }
  }

  & > p {
    margin: 20px;
  }
`;

export default LoginContainer;
