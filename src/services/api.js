import axios from 'axios';
export * from './routes.constants';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080/api/v1',
  headers: {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'Access-Control-Allow-headers': 'Content-Type',
  },
});

const addToekenToRequest = async (req) => {
  const token = 'token';
  req.headers.Authorization = `Bearer ${token}`;
  return req;
};

axiosInstance.interceptors.request.use(addToekenToRequest);

export default axiosInstance;
