import styled from "styled-components";

const GridContainer = styled.div`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '100%'};
  display: grid;
  grid-template-columns: ${props => props.cols || '100%'};
  grid-template-rows: ${props => props.rows || '100%'};
  justify-content: ${props => props.justify || 'center'};
  align-items: ${props => props.align || 'center'};

  &.multiCols {
    grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
  }

  &.multiRows {
    grid-template-rows: ${props => `repeat(${props.rows}, 1fr)`};
  }

  &.multiGrid {
    grid-template-columns: ${props => `repeat(${props.cols}, 1fr)`};
    grid-template-rows: ${props => `repeat(${props.rows}, 1fr)`};
  }

  &.nested {
    grid-column: ${props => props.colSpan || '100%'};
    grid-row: ${props => props.rowSpan || '100%'};
  }
`;

export default GridContainer;