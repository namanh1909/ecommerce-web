import axiosClient from '@/apis/axios-client';
import { Brand, BrandMutation } from './type';

const baseUrl = 'brands';

const brandApis = {
  get: (): Promise<Brand[]> => axiosClient.get(`${baseUrl}`),
  create: (params: BrandMutation): Promise<Brand[]> => axiosClient.post(`${baseUrl}`, params),
};

export default brandApis;
