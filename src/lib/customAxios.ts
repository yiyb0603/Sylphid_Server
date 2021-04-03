import axios, { AxiosInstance } from 'axios';
import { CLIENT_ID, CLIENT_SECRET } from 'config/config.json';
import { NAVER_API_ADDRESS } from './constants';

export const customAxios: AxiosInstance = axios.create({
  baseURL: NAVER_API_ADDRESS,
  headers: {
    'X-Naver-Client-Id': CLIENT_ID,
    'X-Naver-Client-Secret': CLIENT_SECRET,
  },
});