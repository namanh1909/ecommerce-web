import axiosClient from '@/apis/axios-client';
import { Brand, BrandMutation } from './type';

const baseUrl = 'brands';

const brandApis = {
  get: (): Promise<Brand[]> => axiosClient.get(`${baseUrl}`),
  create: (params: FormData): Promise<Brand[]> =>
    axiosClient.postForm(`${baseUrl}`, params),
  update: (id: string, params: FormData): Promise<Brand[]> =>
    axiosClient.postForm(`${baseUrl}/${id}`, params),
};

export default brandApis;
