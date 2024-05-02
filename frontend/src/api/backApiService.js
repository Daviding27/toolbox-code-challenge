import axios from 'axios';
import static_URLs from '../config/staticUrls';

const backApiService = axios.create({
  baseURL: static_URLs.backend_api,
});

backApiService.interceptors.request.use((config) => {
  config.headers = {
    ...config.headers,
  };
  return config;
});

export default backApiService;
