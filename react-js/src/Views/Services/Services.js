import { useEffect } from "react";
import { v4 } from 'uuid';

import { ServiceCard } from "../../Components";
import ServicesContainer from "./styles";

import PreventiveMaintenance from '../../assets/images/preventive-maintenance.jpg';
import BodyRepair from '../../assets/images/body-repair.jpg';
import CarCare from '../../assets/images/car-care.jpg';

const Services = ({ list, getList }) => {

  useEffect(() => {
    getList();
  }, [getList]);

  const serviceImg = [
    PreventiveMaintenance,
    BodyRepair,
    CarCare,
  ];

  const serviceLinks = [
    "preventative-maintenece",
    "car-care",
    "car-repair"
  ];

  return (
    <ServicesContainer className="multiGrid" cols={12} rows={12}>
      <h2>Our Services</h2>
      <p>Our representatives are professional trained and skiiled with the latest and futuristic techniques to provide a best quality service.</p>
      <p>At AutoMob Mechanic, we provide a high class service to the customers for their happy and memorable driving experience.</p>
      <div className="cardContainer">
        {list?.map((item, index) => (
          <ServiceCard
            key={v4()}
            id={item.id}
            title={item.name}
            description={item.description}
            offer={item.offer}
            source={serviceImg[index]}
            link={serviceLinks[index]}
          />
        ))}
      </div>
    </ServicesContainer>
  );
};

export default Services;
