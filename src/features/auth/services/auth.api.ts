import axiosClient from '@/apis/axios-client';
import { loginRequestType } from './type';

const baseUrl = 'auth';

const authApi = {
    login: (params: loginRequestType): Promise<any> => axiosClient.post(`${baseUrl}/login`, params),
};

export default authApi;
