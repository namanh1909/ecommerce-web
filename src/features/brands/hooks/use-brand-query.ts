import { createQueryKeys } from '@lukemorales/query-key-factory';
import brandApis from '../services/brands.api';
import { QueryOptions } from '@/ts/types';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Brand } from '../services/type';
import toast from 'react-hot-toast';
import { useModalStore } from '@/hooks';

const brands = createQueryKeys('brands', {
  list: () => ({
    queryKey: ['brands'],
    queryFn: () => brandApis.get(),
  }),
});

export const useBrandsListQuery = (
  options: QueryOptions<ApiResponse<Brand[]>> = {},
) => {
  return useQuery({
    ...brands.list(),
    ...options,
  });
};

export const useAddBrandMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: brandApis.create,
    onSuccess: () => {
      void toast.success('Create new Brand successfully');
      queryClient.invalidateQueries(brands.list().queryKey);
    },
    onError: () => {
      void toast.error('Create new Brand failed');
    },
  });
};