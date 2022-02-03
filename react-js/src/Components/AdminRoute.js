import { Navigate, Outlet } from "react-router-dom";

const AdminRoute = ({ user }) => {
  return user?.isAdmin ? <Outlet /> : <Navigate to="/" />
};

export default AdminRoute;