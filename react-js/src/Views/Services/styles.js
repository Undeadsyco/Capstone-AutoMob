import styled from "styled-components";
import { GridContainer } from "../../Styles";

const ServicesContainer = styled(GridContainer)`
  & > h2 {
    grid-column: 2/12;
    grid-row: 1/3;
  }

  & > p {
    grid-column: 2/12;

    &:first-child {
      grid-row: 3/4;
    }

    &:last-child {
      grid-row: 4/5;
    }
  }

  & .cardContainer {
    width: 100%;
    height: 100%;
    grid-column: 2/12;
    grid-row: 6/13;
    justify-self: center;
    display: flex;
    justify-content: space-between;
  }
`;

export default ServicesContainer;