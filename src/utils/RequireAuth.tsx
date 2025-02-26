import { Navigate, Outlet } from "react-router-dom";

const RequireAuth = () => {
  const isAuth = !!localStorage.getItem("userId");

  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default RequireAuth;
