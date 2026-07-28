import { Navigate, Outlet, useLocation } from 'react-router';
import { useAuth } from '../../hooks/useAuth';

const AuthorizedRoute = () => {
  const { isAuthorized } = useAuth();
  const location = useLocation();

  if (!isAuthorized) {
    return <Navigate to="/profile" replace state={{ from: location.pathname }} />;
  }

  return <Outlet />;
};

export default AuthorizedRoute;
