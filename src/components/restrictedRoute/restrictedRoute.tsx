import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth';
import { Navigate, Outlet } from 'react-router-dom';

export const RestrictedRoute = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return !isLoggedIn ? <Outlet /> : <Navigate to="/profile" replace />;
};
