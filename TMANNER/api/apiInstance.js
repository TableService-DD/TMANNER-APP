import axios from 'axios';
import { getRefresh } from './auth';
import { BASE_URL } from './data';

import AsyncStorage from '@react-native-async-storage/async-storage';

//API 
const apiInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${AsyncStorage.getItem('access_token')}`,
  },
});

apiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const isRefreshed = await getRefresh();
      if (isRefreshed) {
        apiInstance.defaults.headers['Authorization'] = `Bearer ${AsyncStorage.getItem('access_token')}`;
        return apiInstance(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);

export default apiInstance;
 