import styled from "styled-components";
import { GridContainer } from "../../Styles";

const ServiceContainer = styled(GridContainer)`
  & > h2 {
    grid-row: 1/3;
    grid-column: 1/13;
  }

  & > img {
    width: 100%;
    height: 100%;
    grid-column: 1/6;
    grid-row: 3/8;
  }

  & > p {
    grid-column: 1/13;
    grid-row: 8/9;
  }

  & > ul {
    margin-left: 20px;
    grid-column: 1/7;
    grid-row: 9/12;
  }

  & > button {
    width: 70%;
    height: 25px;
    border: 1px solid transparent;
    border-radius: 5px;
    background-color: blue;
    color: white;

    &#booking {
      grid-column: 1/3;
      grid-row: 12/13;
    }

    &#back {
      justify-self: end;
      grid-column: 2/4;
      grid-row: 12/13;
    }

    &:hover {
      border: 1px solid black;
      color: black;
      background-color: rgba(0, 0, 255, 0.5);
    }
  }
`;

export default ServiceContainer;
