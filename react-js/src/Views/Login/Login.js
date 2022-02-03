import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import LoginContainer from './styles';

const validation = yup.object({
  name: yup.string().required(),
  password: yup.string().required()
});

const Login = ({ submit }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    validationSchema: validation,
    initialValues: {
      name: "",
      password: ""
    },
    onSubmit: (values) => {
      const { name, password } = values;
      submit(name).then(res => {
        if (!res) alert('Username not found! Please check and try again.')
        if (res.password === password) {
          localStorage.setItem('user', JSON.stringify(res));
          dispatch({ type: 'LOGIN', data: res });
          alert('Login was successful');
          navigate('/');
        } else {
          alert('Incorrect Password! please check it and try again.')
        }
      })
    }
  });

  return (
    <LoginContainer>
      <h1>Login to AutoMob</h1>
      <form onSubmit={formik.handleSubmit}>
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
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
      <p>Don't have an account? Sign up <Link to="/sign-up">here</Link></p>
    </LoginContainer>
  )
};

export default Login;
