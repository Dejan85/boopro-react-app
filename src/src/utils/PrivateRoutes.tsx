import { Outlet, Navigate } from "react-router-dom";

interface PrivateRouteI {
  children: JSX.Element | JSX.Element[];
}

export const PrivateRoutes: React.FC = (): JSX.Element => {
  const auth = { token: false };
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};
