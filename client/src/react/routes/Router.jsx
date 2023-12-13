import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { routes } from './routes';

import Main from '../layouts/Main';
import RequireAuth from './RequireAuth';
import Auth from '../pages/auth';
import NotFound from '../pages/NotFound';
import Account from '../pages/account/Account';
import People from '../pages/people/People';

export const Router = () => {
  const router = createBrowserRouter([
    { path: routes.login, Component: RequireAuth(Auth) },
    {
      path: routes.dashboard,
      Component: RequireAuth(Main),
      children: [
        { path: routes.account, Component: RequireAuth(Account) },
        { path: routes.people, Component: RequireAuth(People) }
      ]
    },
    { path: '*', element: <NotFound /> }
  ]);
  return <RouterProvider router={ router } />;
};

export default Router;
