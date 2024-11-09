import { FC, lazy } from 'react';

import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import LayoutComponent from '@/layout';
import useAuth from '@/features/auth/hooks/useAuth';
import {
  AuthenticationPage,
  Dashboard,
  Orders,
  Products,
  Users,
} from '@/pages';

const NotFound = lazy(() => import('@/pages/not-found'));

const RenderRouter: FC = () => {
  const { token } = useAuth();

  const authRoutes = [
    {
      path: '/',
      element: <AuthenticationPage />,
    },
    {
      path: '',
      element: <Navigate to="auth" />,
    },
    {
      path: '*',
      element: <Navigate to="auth" />,
    },
  ];

  const routes = [
    {
      path: '/',
      element: (
        <LayoutComponent>
          <Outlet />
        </LayoutComponent>
      ),
      children: [
        {
          path: '/',
          element: (
              <Dashboard />
          ),
        },
        {
          path: '/dashboard',
          element: (
              <Dashboard />
          ),
        },
        {
          path: '/users',
          element: (
              <Users />
          ),
        },
        {
          path: '/products',
          element: (
              <Products />
          ),
        },
        {
          path: '/orders',
          element: (
              <Orders />
          ),
        },
        {
          path: '/orders',
          element: (
              <Orders />
          ),
        },
        {
          path: '*',
          element: <Navigate to="/" />,
        },
      ],
    },
  ];

  const element = useRoutes(token ? routes : authRoutes);

  return element;
};

export default RenderRouter;
