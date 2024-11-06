import { FC, lazy } from 'react';

import { Navigate, useRoutes } from 'react-router-dom';
import LayoutComponent from '@/layout';
import useAuth from '@/features/auth/hooks/useAuth';
import { AuthenticationPage } from '@/pages';

const NotFound = lazy(() => import('@/pages/not-found'));

const RenderRouter: FC = () => {
  const { token } = useAuth();

  const authRoutes = [
    {
      path: '/auth',
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
      element: <LayoutComponent />,
      children: [
        {
          path: '',
          element: <Navigate to="home" />,
        },
        {
          path: '*',
          element: <NotFound />,
        },
      ],
    },
  ];

  const element = useRoutes(!token ? routes : authRoutes);

  return element;
};

export default RenderRouter;
