import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-hot-toast';
import authApi from '../services/auth.api';
import useAuth from './useAuth';

export const useLoginMutation = () => {
  const { login } = useAuth();

  return useMutation({
    mutationFn: authApi.login,
    onSuccess: (response) => {
      login({
        newToken: response.data.data.tokens?.access?.token,
        refreshToken: response.data.data.tokens?.refresh?.token,
      });
      toast.success('Login successful');
    },
  });
};
