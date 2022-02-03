const UserForm = ({ formik }) => {
  return (
    <div className="user" id="user">
      <label htmlFor="name">
        <div>Name:</div>
        <input
          id="name"
          name="name"
          type="text"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.name && formik.touched.name && <div className="err">{formik.errors.name}</div>}
      </label>
      <label htmlFor="email">
        <div>Email:</div>
        <input
          id="email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email && <div className="err">{formik.errors.email}</div>}
      </label>
      <label htmlFor="number">
        <div>Number:</div>
        <input
          id="number"
          name="number"
          type="tel"
          value={formik.values.number}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.number && formik.touched.number && <div className="err">{formik.errors.number}</div>}
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
    </div>
  );
};

export default UserForm;
