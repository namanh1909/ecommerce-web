import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import authApi from '../services/auth.api';
import { useNavigate } from 'react-router-dom';

export const useAuthQuery = () => {
  const navigate = useNavigate();
  const loginMutation = useMutation({
    mutationFn: authApi.login,
    onSuccess: (response) => {
      localStorage.setItem('token', response?.data.tokens?.access?.token);
      localStorage.setItem(
        'refreshToken',
        response.data.tokens?.refresh?.token,
      );

      navigate('/');
      toast.success('Login successful');
    },
  });

  const logoutMutation = useMutation({
    mutationFn: () => {
      const refreshToken = localStorage.getItem('refreshToken');
      return authApi.logout({ refreshToken: refreshToken as string });
    },
    onSuccess: () => {
      localStorage.clear();
      navigate('/');
      toast.success('Logout successful');
    },
  });

  return { loginMutation, logoutMutation };
};
