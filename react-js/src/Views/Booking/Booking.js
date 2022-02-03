import { useState } from "react";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { v4 } from "uuid";

import { UserForm, BookingForm } from '../../Components/BookingComponents'
import BookingContainer from "./styles";

const validation = yup.object({
  name: yup.string().required(),
  email: yup.string().required(),
  number: yup.number().required(),
  state: yup.string().required(),
  city: yup.string().required(),
  address: yup.string().required(),
  service: yup.string().required(),
  make: yup.string().required(),
  model: yup.string().required(),
  fuel: yup.string().required(),
  miles: yup.string().required(),
  date: yup.date().required()
});


const Booking = ({ submit, user }) => {
  const [carIndex, setCarIndex] = useState();
  const [addressIndex, setAddressIndex] = useState();
  const { state } = useLocation();
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      name: user?.username ? user?.username : "",
      email: user?.email ? user?.email : "",
      number: user?.number ? user?.number : "",
      city: "",
      state: "",
      address: "",
      service: state?.service ? state?.service : "",
      make: "",
      model: "",
      fuel: "",
      miles: "",
      date: ""
    },
    onSubmit: (values) => {
      const {
        name, email, number, city, state, address,
        service, make, model, fuel, miles, date
      } = values;
      const body = {
        user: { name, email, number, address: { city, state, address } },
        car: { make, model, fuel, miles },
        service,
        date
      }

      submit(body).then(res => {
        if (res.service) {
          navigate('/booking-confirmation');
        }
      })
    },
  });

  const setCar = () => {
    console.log(user.cars[carIndex]);
    formik.setFieldValue('make', user.cars[carIndex].make);
    formik.setFieldValue('model', user.cars[carIndex].model);
    formik.setFieldValue('fuel', user.cars[carIndex].fuel);
    formik.setFieldValue('miles', user.cars[carIndex].miles);
  }

  const setAddress = () => {
    formik.setFieldValue('city', user.address[addressIndex].city);
    formik.setFieldValue('state', user.address[addressIndex].state);
    formik.setFieldValue('address', user.address[addressIndex].address);
  }

  return (
    <BookingContainer className="multiGrid" width="80%" rows={12} cols={12} display={user && (user?.cars.length > 0 || user?.address.length > 0) ? 'flex' : 'none'}>
      <h2>Book Your Service</h2>
      <div className="selectContainer">
        <div>
          <h4>Select your address</h4>
          <select onChange={(e) => setAddressIndex(e.target.value)} value={addressIndex}>
            <option value="">select car</option>
            {user?.address.map((item, index) => (
              <option key={v4()} value={index}>{item.address}</option>
            ))}
          </select>
          <button onClick={() => setAddress()}>Select</button>
        </div>
        <div>
          <h4>Select your car</h4>
          <select onChange={(e) => setCarIndex(e.target.value)} value={carIndex}>
            <option value="">select car</option>
            {user?.cars.map((item, index) => (
              <option key={v4()} value={index}>{item.make} {item.model}</option>
            ))}
          </select>
          <button onClick={() => setCar()}>Select</button>
        </div>
      </div>
      <form onSubmit={formik.handleSubmit} className="formContainer">
        <UserForm formik={formik} />
        <BookingForm formik={formik} />
        <div className="btnContainer">
          <button type="submit">Submit</button>
        </div>
      </form>
    </BookingContainer>
  );
};

export default Booking;
