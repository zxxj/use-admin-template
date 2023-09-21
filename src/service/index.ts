import axios from 'axios';
import { httpError } from './errorCode';
import { BASE_URL, TIME_OUT } from './config';

const request = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

request.interceptors.request.use((config) => {
  config.headers.token = '123';
  return config;
});

request.interceptors.response.use(
  (res) => {
    if (res.data.code === 201) httpError(res.data.code);
    return res.data;
  },
  (err) => {
    httpError(err.response.status);
    return Promise.reject(err);
  },
);

export default request;
