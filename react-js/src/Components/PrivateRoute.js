import { Navigate, Outlet } from 'react-router-dom';
import useAuth from '../Utils/useAuth';

const PrivateRoute = () => {
  const { checkAuth } = useAuth();
  return checkAuth ? <Outlet /> : <Navigate to="/" />
};

export default PrivateRoute;
