import axiosClient from '@/apis/axios-client';
import { loginRequestType, logoutRequestType } from './type';

const baseUrl = 'auth';

const authApi = {
  login: (params: loginRequestType): Promise<any> =>
    axiosClient.post(`${baseUrl}/login`, params),
  logout: (params: logoutRequestType): Promise<any> =>
    axiosClient.post(`${baseUrl}/logout`, params),
};

export default authApi;
