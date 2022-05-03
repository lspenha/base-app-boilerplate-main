import axios, { AxiosRequestConfig } from 'axios';

import {
  clearLocalStorage,
  getStorageItem,
  wallEToken,
} from '@data/tokens';

// TODO: CHANGE NAME TO THE PRODUCT
export const wallEApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_WALLE_API_URL,
});

wallEApi.interceptors.request.use((config: AxiosRequestConfig) => {
  const token = getStorageItem(wallEToken);

  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

wallEApi.interceptors.response.use(config => {
  if (config.status === 401) {
    clearLocalStorage();
    window.location.replace('/');
  }

  return config;
});
