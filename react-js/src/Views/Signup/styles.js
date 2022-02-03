import styled from "styled-components";
import { GridContainer } from "../../Styles";

const SignupContainer = styled(GridContainer)`
  & > h2 {
    text-align: center;
  }

  & > form {
    width: 25%;
    height: 90%;
    padding: 10px;
    border: 2px solid black;
    border-radius: 20px;
    justify-self: center;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(5, 1fr);

    & > label {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: flex-start;

      & > div {
        width: 100%;
        height: 25px;
      }

      & > input {
        width: 100%;
        height: 25px;
      }

      & .err {
        font-size: 0.9rem;
        color: red;
      }
    }

    & .btnBox {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      & > button {
        width: 30%;
        height: 25px;
        border: 1px solid transparent;
        border-radius: 5px;
        background-color: blue;
        color: white;

        &:hover {
          width: 35%;
          cursor: pointer;
          border-color: black;
          background-color: rgba(0, 0, 255, 0.5);
          color: black;
        }
      }
    }
  }
`;

export default SignupContainer;
