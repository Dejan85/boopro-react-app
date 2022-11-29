import { Outlet, Navigate } from "react-router-dom";

export const PrivateRoutes: React.FC = (): JSX.Element => {
  const authToken = window.localStorage.getItem("auth");
  return authToken ? <Outlet /> : <Navigate to="/login" />;
};
