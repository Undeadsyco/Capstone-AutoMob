import styled from "styled-components";
import { GridContainer } from "../../Styles";

const ProfileContainer = styled(GridContainer)`
  padding: 10px 0;
  gap: 10px;

  & .profileInfo {
    height: 100%;
    border: 2px solid black;
    border-radius: 10px;
    grid-column: 1/9;
    grid-row: 1/6;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: repeat(5, 1fr);
    align-items: center;

    & > h2 {
      padding: 0 20px;
      grid-column: 1/9;
      grid-row: 1/3;
    }

    & > h3 {
      padding-left: 10px;
      grid-row: 3/4;
      &.email {
        grid-column: 1/5;
      }

      &.number {
        grid-column: 5/9;
      }
    }

    & > input {
      width: 75%;
      height: 70%;
      margin-left: 10px;
      grid-row: 4/5;
      
      &.emailInput {
        grid-column: 1/5;
      }

      &.numberInput {
        grid-column: 5/9;
      }
    }

    & > button {
      width: 90%;
      height: 75%;
      border: none;
      border-radius: 5px;
      background-color: blue;
      color: white;
      grid-column: 8/9;
      grid-row: 5/6;

      &:hover {
        cursor: pointer;
        border: 1px solid black;
        background-color: rgba(0, 0, 255, 0.5);
        color: black;
      }
    } 
  }

  & .carsList {
    height: 100%;
    border: 2px solid black;
    border-radius: 10px;
    grid-column: 1/5;
    grid-row: 6/13;
  }

  & .addressList {
    height: 100%;
    border: 2px solid black;
    border-radius: 10px;
    grid-column: 5/9;
    grid-row: 6/13;
  }

  & .formContainer {
    height: 100%;
    border: 2px solid black;
    border-radius: 10px;
    grid-column: 9/13;
    grid-row: 1/13;
  }
`;

export default ProfileContainer;
