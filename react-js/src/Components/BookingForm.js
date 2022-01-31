const BookingForm = ({ formik }) => {
  return (
    <div className="appointment" id="appointment">
      <label htmlFor="service">
        <div>Service:</div>
        <select
          id="service"
          name="service"
          type="text"
          value={formik.values.service}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="">select service</option>
          <option value="preventive maintenance">Preventive Maintenance</option>
          <option value="car care">Car Care</option>
          <option value="body repair">Body Repair</option>
        </select>
        {formik.errors.service && formik.touched.service && <div className="err">{formik.errors.service}</div>}
      </label>
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
      <label htmlFor="fuel" className="radio">
        <div>Fuel</div>
        <input
          id="petrol"
          name="fuel"
          type="radio"
          value="petrol"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />Petrol
        <input
          id="diesel"
          name="fuel"
          type="radio"
          value="diesel"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />Diesel
        <br />
        <input
          id="lpg"
          name="fuel"
          type="radio"
          value="lpg"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />LPG
        <input
          id="others"
          name="fuel"
          type="radio"
          value="others"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />Others
        {formik.errors.fuel && formik.touched.fuel && <div className="err">{formik.errors.fuel}</div>}
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
      <label htmlFor="date">
        <div>Date:</div>
        <input
          id="date"
          name="date"
          type="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.date && formik.touched.date && <div className="err">{formik.errors.date}</div>}
      </label>
    </div>
  );
};

export default BookingForm;
