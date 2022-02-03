import { Link } from 'react-router-dom';

import HomeContainer from './styles';
import HomeImg from '../../assets/images/home.jpg';

const Home = () => {
  return (
    <HomeContainer className="multiGrid" width="80%" cols={12} rows={12}>
      <img src={HomeImg} alt="" />
      <div>
        <h2>About Us</h2>
        <q>One stop solution to get your car serviced and repaired</q>
        <p>At AutoMob Mechanic, we aim to make the car repair and service experience straigntforward by providing services for reapiring, servicing, and maintaning - lending our expertise in all forms.</p>
        <h2>How It Works</h2>
        <h3>Choose the service</h3>
        <p>Choose the perfect service for your car.</p>
        <h3>Book An Appointment</h3>
        <p>Book an appointment with us on your convenient date</p>
        <h3>Get Your Car Fixed</h3>
        <p>No need to wait, our representatives will take care of everything on their own.</p>
        <button><Link to="/services">Explore More</Link></button>
      </div>
    </HomeContainer>
  );
};

export default Home;
