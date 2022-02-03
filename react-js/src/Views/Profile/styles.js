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

      &.cancelBtn{
        grid-column: 7/8;
        grid-row: 5/6;
        background-color: red;

        &:hover {
          cursor: pointer;
          border: 1px solid black;
          background-color: rgba(255, 0, 0, 0.5);
          color: black;
        }
      }

      &.bookingBtn {
        grid-column: 7/8;
        grid-row: 5/6;
      }
    } 
  }

  & .carsList {
    grid-column: 1/5;
    grid-row: 6/13;
  }

  & .addressList {
    grid-column: 5/9;
    grid-row: 6/13;
  }

  & .listContainer {
    height: 100%;
    border: 2px solid black;
    border-radius: 10px;

    & .listTitle {
      margin: 5px 10px;
    }

    & > hr {
      background-color: black;
      height: 5px;
    }

    & .list {
      padding: 5px 20px;
      font-size: 0.9rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      & > li {
        width: 48%;

        & > button {
          padding: 2px 8px;
          border: none;
          border-radius: 5px;
          background-color: red;
          color: white;

          &:hover {
            cursor: pointer;
            border: 1px solid black;
            background-color: rgba(255, 0, 0, 0.5);
            color: black;
          }
        }
      }
    }
  }

  & .formContainer {
    height: 100%;
    border: 2px solid black;
    border-radius: 10px;
    grid-column: 9/13;
    grid-row: 1/13;

    & > h3 {
      text-align: center;
    }

    & .btnBox {
      width: 100%;
      text-align: center;

      & > button {
        height: 25px;
        width: 120px;
        margin: 10px 5px;
        border: 1px solid transparent;
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

    & > div:last-child {
      height: 360px;
      margin: 20px 10px;
      border: 2px solid black;
      border-radius: 5px;

      & > form {
        height: 100%;
        padding: 10px;
        display: grid;
        grid-template-rows: repeat(5, 1fr);

        & > label {
          width: 100%;

          & > input {
            width: 100%;
          }

          &.fuel {
            display: flex;
            flex-wrap: wrap;

            & > div {
              width: 100%;
            }

            & > span {
              width: 50%;

              & > input {
                width: 15px;
                height: 15px;
                margin: 0 5px 0 15px;
              }
            }
          }

          & .err {
            font-size: 0.9rem;
            color: red;
          }
        }

        & .btnBox {
          & > button {
            margin-top: 20px;
          }
        }
      }
    }
  }

  & .bookingList {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
      width: 60%;
      height: 80%;
      border: 5px solid black;
      border-radius: 10px;
      background-color: white;
      text-align: center;

      & > h2 {
        margin: 10px 0;
      }

      & > hr {
        background-color: black;
        height: 5px;
      }

      & > div {
        height: 75%;
        padding: 20px 80px;
        margin-bottom: 15px;
        overflow-y: auto;

        & > ul {
          list-style: none;

          & > li {
            margin: 10px 0;

            & > p {
              display: flex;
              justify-content: space-between;
              align-items: center;

              & > span {
                width: 33%;
              }
            }
          }
        }
      }

      & > button {
        height: 25px;
        width: 20%;
        border: 1px solid transparent;
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
`;

export default ProfileContainer;
