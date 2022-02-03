import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from 'yup';

import SignupContainer from "./styles";

const validation = yup.object({
  username: yup.string().required(),
  password: yup.string().required(),
  email: yup.string().required(),
  number: yup.number().required().test('length', 'Number must be 10 digets long', 
    val => val && val.toString().length === 10
  )
});

const Signup = ({ submit }) => {
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      username: '',
      password: '',
      email: '',
      number: '',
      isAdmin: false,
      cars: [],
      address: []
    },
    onSubmit: (values) => {
      console.log(values);
      submit(values).then(data => {
        if (data.password === values.password) {
          alert('Sign up was successful');
          navigate('/login');
        }
      })
    }
  });

  return (
    <SignupContainer rows="10% 90%" >
      <h2>AutoMob Sign Up</h2>
      <form onSubmit={formik.handleSubmit}>
        <label htmlFor="username">
          <div>Username:</div>
          <input
            id="username"
            name="username"
            type="text"
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.username && formik.touched.username && <div className="err">{formik.errors.username}</div>}
        </label>
        
        <label htmlFor="password">
          <div>Password:</div>
          <input
            id="password"
            name="password"
            type="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.errors.password && formik.touched.password && <div className="err">{formik.errors.password}</div>}
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

        <div className="btnBox">
          <button type="submit">Submit</button>
        </div>
      </form>
    </SignupContainer>
  );
};

export default Signup;
