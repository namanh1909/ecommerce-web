import { TodoData, TodoDataMutation } from './types';
import axiosClient from '@/apis/axios-client';

const baseUrl = 'todos';

const todoApi = {
  getList: (): ApiResponse<TodoData[]> => axiosClient.get(baseUrl),
  getDetail: (id: string): ApiResponse<TodoData> => axiosClient.get(`${baseUrl}/${id}`),
  add: (body: TodoDataMutation): ApiResponse<TodoData> => axiosClient.post(baseUrl, body),
  update: (body: { id: string; data: TodoDataMutation }): ApiResponse<TodoData> =>
    axiosClient.put(`${baseUrl}/${body.id}`, body.data),
  delete: (id: string): ApiMessageResponse => axiosClient.delete(`${baseUrl}/${id}`),
};

export default todoApi;
