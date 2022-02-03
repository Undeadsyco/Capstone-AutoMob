import styled from "styled-components";
import { GridContainer } from "../../Styles";

const ConfirmationContainer = styled(GridContainer)`
  text-align: center;
  & > img {
    width: 100%;
    height: 100%;
    grid-column: 5/9;
    grid-row: 2/8;
  }

  & > h3 {
    grid-column: 5/9;
    grid-row: 8/9;
  }

  & > p {
    grid-column: 5/9;
    grid-row: 10/11;
  }
`;

export default ConfirmationContainer;
