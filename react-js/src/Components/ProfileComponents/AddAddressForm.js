import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from 'yup';

const validation = yup.object({
  city: yup.string(),
  state: yup.string(),
  address: yup.string()
});

const AddAddressForm = ({ userId, addItem }) => {
  const dispatch = useDispatch();
  
  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      city: '',
      state: '',
      address: ''
    },
    onSubmit: (values, actions) => {
      addItem(userId, values).then(data => {
        dispatch({ type: 'EDIT_USER', data });
        localStorage.setItem('user', JSON.stringify(data));
        alert('Address was successfully added');
        actions.resetForm();
      })
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="address">
        <div>Address:</div>
        <input
          id="address"
          name="address"
          type="text"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.address && formik.touched.address && <div className="err">{formik.errors.address}</div>}
      </label>
      
      <label htmlFor="city">
        <div>City:</div>
        <input
          id="city"
          name="city"
          type="text"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.city && formik.touched.city && <div className="err">{formik.errors.city}</div>}
      </label>
      
      <label htmlFor="state">
        <div>State:</div>
        <input
          id="state"
          name="state"
          type="text"
          value={formik.values.state}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.state && formik.touched.state && <div className="err">{formik.errors.state}</div>}
      </label>

      <div className="btnBox">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default AddAddressForm;
