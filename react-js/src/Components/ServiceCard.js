import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  width: 30%;
  padding: 10px;
  text-align: center;

  & > h4 {
    margin-bottom: 5px;
  }

  & > img {
    width: 75%;
    height: 40%;
  }

  & > button {
    width: 120px;
    height: 25px;
    margin-top: 15px;
    border: none;
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
`;

const ServiceCard = ({ title, source, description, offer, link }) => {
  const navigate = useNavigate();

  return (
    <Card>
      <h4>{title}</h4>
      <img src={source} alt="" />
      <p>{description}</p>
      <p><i>offer: {offer}% off</i></p>
      <button onClick={() => navigate(link)}>More Details</button>
    </Card>
  );
};

export default ServiceCard;
