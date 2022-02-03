import { useState } from "react";

import AddCarForm from "./AddCarForm";
import AddAddressForm from "./AddAddressForm";

const ProfileFormContainer = ({ userId, addCarItem, addAddressItem }) => {
  const [formType, setFormType] = useState('car');

  return (
    <div className="formContainer">
      {formType === 'car' && <h3>Add A Car To Your List</h3>}
      {formType === 'address' && <h3>Add An Address To Your List</h3>}
      <div className="btnBox">
        <button onClick={() => setFormType('car')}>Add Car</button>
        <button onClick={() => setFormType('address')}>Add Address</button>
      </div>
      <div>
        {formType === 'car' && <AddCarForm userId={userId} addItem={addCarItem} />}
        {formType === 'address' && <AddAddressForm userId={userId} addItem={addAddressItem} />}
      </div>
    </div>
  );
};

export default ProfileFormContainer;
