import styled from "styled-components";
import { GridContainer } from "../../Styles";

const BookingContainer = styled(GridContainer)`
  & > h2 {
    text-align: center;
    grid-column: 1/13;
    grid-row: 1/2;
  }

  & .selectContainer {
    text-align: center;
    width: 50%;
    grid-column: 1/13;
    grid-row: 2/4;
    display: ${props => props.display};
    justify-self: center;
    justify-content: space-around;

    & > div {
      & > select {
        width: 150px;
      }

      & > button {
        margin-left: 10px;
      }
    }
  }

  & .formContainer {
    justify-self: center;
    width: 100%;
    height: 100%;
    grid-column: 1/13;
    grid-row: 4/13;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;


    & > div {
      width: 45%;
      height: 75%;
      border: 2px solid black;
      border-radius: 10px;
      padding: 10px;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(3, 1fr);

      & > label > input {
        width: 95%;
      }

      & > label > select {
        width: 95%;
      }

      & .radio > input {
        width: 15px;
        height: 15px;
        margin-right: 5px;
        margin-left: 20px;
      }

      & > label .err {
        font-size: 0.8rem;
        color: red;
      }
    }

    & .btnContainer {
      width: 100%;
      height: 30px;
      padding: 0;
      border: none;
      border-radius: 0;
      text-align: center;
      display: block;

      & > button {
        width: 20%;
        height: 100%;
        border: 1px solid transparent;
        border-radius: 5px;
        background-color: blue;
        color: white;
      }
    }
  }
`;

export default BookingContainer;
