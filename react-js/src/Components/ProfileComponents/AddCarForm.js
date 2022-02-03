import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as yup from 'yup';

const validation = yup.object({
  make: yup.string(),
  model: yup.string(),
  fuel: yup.string(),
  miles: yup.number()
});

const AddCarForm = ({ userId, addItem }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      make: '',
      model: '',
      fuel: '',
      miles: '',
    },
    onSubmit: (values, actions) => {
      addItem(userId, values).then(data => {
        dispatch({ type: 'EDIT_USER', data });
        localStorage.setItem('user', JSON.stringify(data));
        alert('Car was successfully added');
        actions.resetForm();
      })
    }
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="make">
        <div>Make:</div>
        <input
          id="make"
          name="make"
          type="text"
          value={formik.values.make}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.make && formik.touched.make && <div className="err">{formik.errors.make}</div>}
      </label>

      <label htmlFor="model">
        <div>Model:</div>
        <input
          id="model"
          name="model"
          type="text"
          value={formik.values.model}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.model && formik.touched.model && <div className="err">{formik.errors.model}</div>}
      </label>

      <label htmlFor="miles">
        <div>Miles:</div>
        <input
          id="miles"
          name="miles"
          type="number"
          value={formik.values.miles}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.miles && formik.touched.miles && <div className="err">{formik.errors.miles}</div>}
      </label>

      <label className="fuel" htmlFor="fuel">
        <div>Fuel:</div>
        <span>
          <input
            id="petrol"
            name="fuel"
            type="radio"
            value="petrol"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />Petrol
        </span>
        <span>
          <input
            id="diesel"
            name="fuel"
            type="radio"
            value="diesel"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />Diesel
        </span>
        <span>
          <input
            id="lpg"
            name="fuel"
            type="radio"
            value="lpg"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />LPG
        </span>
        <span>
          <input
            id="others"
            name="fuel"
            type="radio"
            value="others"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />Others
        </span>
        {formik.errors.fuel && formik.touched.fuel && <div className="err">{formik.errors.fuel}</div>}
      </label>
      <div className="btnBox">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default AddCarForm;
