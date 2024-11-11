import { FC, lazy } from 'react';

import { Navigate, Outlet, useLocation, useRoutes } from 'react-router-dom';
import LayoutComponent from '@/layout';
import {
  AuthenticationPage,
  Dashboard,
  Orders,
  Products,
  Users,
} from '@/pages';
import ProtectedRoute from './protectedRoute';

const NotFound = lazy(() => import('@/pages/not-found'));

const RenderRouter: FC = () => {
  const storedToken = localStorage.getItem('token');

  const conditionAuth = Boolean(
    storedToken && storedToken.length > 0 && storedToken !== 'undefined',
  );

  const routes = [
    {
      path: '/',
      element: (
        <ProtectedRoute isAuthenticated={conditionAuth}>
          <LayoutComponent>
            <Outlet />
          </LayoutComponent>
        </ProtectedRoute>
      ),
      children: [
        {
          path: '/',
          element: <Dashboard />,
        },
        {
          path: '/dashboard',
          element: <Dashboard />,
        },
        {
          path: '/users',
          element: <Users />,
        },
        {
          path: '/products',
          element: <Products />,
        },
        {
          path: '/orders',
          element: <Orders />,
        },
        {
          path: '/orders',
          element: <Orders />,
        },
        {
          path: '*',
          element: <Navigate to="/" />,
        },
      ],
    },
  ];

  const element = useRoutes(routes);

  return element;
};

export default RenderRouter;
