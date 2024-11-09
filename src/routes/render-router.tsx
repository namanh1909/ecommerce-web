import { FC, lazy } from 'react';

import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import LayoutComponent from '@/layout';
import useAuth from '@/features/auth/hooks/useAuth';
import { AuthenticationPage, Dashboard, Orders, Products, Users } from '@/pages';

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
      element: <Outlet />,
      children: [
        {
          path: '/',
          element: (
            <LayoutComponent>
              <Dashboard />
            </LayoutComponent>
          ),
        },
        {
          path: '/dashboard',
          element: (
            <LayoutComponent>
              <Dashboard />
            </LayoutComponent>
          ),
        },
        {
          path: '/users',
          element: (
            <LayoutComponent>
              <Users />
            </LayoutComponent>
          ),
        },
        {
          path: '/products',
          element: (
            <LayoutComponent>
              <Products />
            </LayoutComponent>
          ),
        },
        {
          path: '/orders',
          element: (
            <LayoutComponent>
              <Orders />
            </LayoutComponent>
          ),
        },
        {
          path: '/settings',
          element: (
            <LayoutComponent>
              <Orders />
            </LayoutComponent>
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
