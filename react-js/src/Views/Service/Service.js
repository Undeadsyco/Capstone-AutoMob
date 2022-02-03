import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 } from "uuid";

import PreventiveMaintenance from '../../assets/images/preventive-maintenance-service.jpg';
import BodyRepair from '../../assets/images/body-repair-service.jpg';
import CarCare from '../../assets/images/car-care-service.jpg';

import ServiceContainer from "./styles";

const Service = ({ onGetService }) => {
  const [img, setImg] = useState(undefined);
  const [service, setService] = useState(undefined);
  const navigate = useNavigate();
  const { state: { id } } = useLocation();

  useEffect(() => {
    onGetService(id).then(data => {
      setService(data);

      switch (id) {
        case 1:
          setImg(PreventiveMaintenance);
          break;
        case 2:
          setImg(BodyRepair);
          break;
        case 3:
          setImg(CarCare);
          break;
        default:
          break;
      }
    });
  }, [id, onGetService]);



  return (
    <ServiceContainer className="multiGrid" width="85%" cols={12} rows={12}>
      <h2>{service?.name}</h2>
      <img src={img} alt="" />
      <p>{service?.about}</p>
      <ul>
        {service?.list.map(item => (
          <li key={v4()}>{item}</li>
        ))}
      </ul>
      <button 
        id="booking" 
        onClick={() => navigate('/booking', { state: { service: service.name } })}
      >
        Book Service
      </button>
      <button id="back" onClick={() => navigate('/services')}>Go Back</button>
    </ServiceContainer>
  );
};

export default Service;
