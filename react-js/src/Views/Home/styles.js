import styled from "styled-components";
import { GridContainer } from '../../Styles';

const HomeContainer = styled(GridContainer)`
  & > img {
    width: 100%;
    height: 100%;
    grid-column: 1/6;
    grid-row: 2/12;
  }

  & > div {
    width: 100%;
    height: 100%;
    padding: 10px;
    grid-column: 6/13;
    grid-row: 2/12;
    display: grid;
    grid-template-rows: repeat(11, 1fr);

    & > button {
      width: 30%;
      height: 80%;
      margin-left: 10px;
      border: 2px solid transparent;
      border-radius: 5px;
      background-color: blue;
      align-self: center;

      &:hover {
        width: 32%;
        margin-left: 5px;
        border: 2px solid black;
        background-color: rgba(0, 0, 255, 0.5);
        cursor: pointer;

        & > a {
          color: black;
        }
      }

      & > a {
        color: white;
        text-decoration: none;
      }
    }
  }
`;

export default HomeContainer;