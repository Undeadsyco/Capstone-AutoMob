import styled from "styled-components";
import { GridContainer } from "../../Styles";

const ReportsContainer = styled(GridContainer)`
  text-align: center;

  & > h2 {
    grid-column: 5/9;
    grid-row: 2/3;
    text-align: center;
  }

  & > button {
    width: 50%;
    height: 70%;
    border: 1px solid transparent;
    border-radius: 5px;
    grid-row: 3/4;
    justify-self: center;
    background-color: blue;
    color: white;

    &.appointmentBtn {
      grid-column: 5/7;
    }

    &.reviewBtn {
      grid-column: 7/9;
    }

    &:hover {
      width: 55%;
      cursor: pointer;
      border: 1px solid black;
      background-color: rgba(0, 0, 255, 0.5);
      color: black;
    }
  }

  & > table {
    max-height: 100%;
    border: 2px solid black;
    border-radius: 10px;
    grid-column: 2/12;
    grid-row: 4/12;

    & > thead {
      height: 30px;
      background-color: blue;

      & > tr > th {
        border-radius: 5px;
        color: white;
      }
    }

    & > tbody {
      overflow-y: auto;

      & > tr{
        height: 30px;

        & > td {
          border-radius: 5px;

          & > button {
            width: 70%;
            border: 1px solid transparent;
            background-color: blue;
            color: white;
            border-radius: 5px;

            &:hover {
              cursor: pointer;
              width: 75%;
              border-color: black;
            }
          }
        }

        &:nth-child(2n) {
          background-color: rgba(0, 0, 255, 0.4);
        }

        &:nth-child(2n-1) {
          background-color: rgba(0, 0, 255, 0.2);
        }
      }
    }
  }

  & .bookingDetails {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
      width: 60%;
      height: 70%;
      border: 5px solid black;
      border-radius: 10px;
      background-color: white;

      & > div {
        height: 85%;
        padding: 10px;
        margin-bottom: 15px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        text-align: left;

        & .customer {
          width: 60%;
        }

        & .service {
          width: 50%;
        }

        & .car {
          width: 35%;
        }
      }

      & > button {
        height: 30px;
        width: 140px;
        margin: 0 10px;
        border: 1px solid transparent;
        border-radius: 5px;
        background-color: blue;
        color: white;

        &:hover {
          cursor: pointer;
          width: 150px;
          border: 1px solid black;
          background-color: rgba(0, 0, 255, 0.5);
          color: black;
        }

        &.cancel {
          background-color: red;

          &:hover {
            background-color: rgba(255, 0, 0, 0.5);
          }
        }
      }
    }
  }
`;

export default ReportsContainer;
