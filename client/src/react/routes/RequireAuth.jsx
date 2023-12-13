import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { routes } from './routes';
import { useSelector } from 'react-redux';

const RequireAuth = Component => {
  const WrappedComponent = props => {
    const navigate = useNavigate();
    const { pathname } = useLocation();
    const token = useSelector(state => state.user.token);
    useEffect(() => {
      if (!token && pathname && pathname !== routes.login) {
        navigate(routes.login, { replace: true });
      }
      if (token && pathname === routes.dashboard) {
        navigate(routes.people, { replace: true });
      }
      if (token && pathname === routes.login) {
        navigate(routes.people, { replace: true });
      }
    }, [pathname, navigate, token]);
    return <Component { ...props } />;
  };
  return WrappedComponent;
};

export default RequireAuth;
