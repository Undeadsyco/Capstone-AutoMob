import ConfirmationContainer from "./styles";

import Image from '../../assets/images/thank-you.jpg'

const Confirmation = () => {
  return (
    <ConfirmationContainer className="multiGrid" rows={12} cols={12}>
      <img src={Image} alt="" />
      <h3>Thanks for booking our service</h3>
      <p>we will get back to you soon with details via email/phone</p>
    </ConfirmationContainer>
  );
};

export default Confirmation;
