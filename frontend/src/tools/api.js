import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.interceptors.request.use(
  (request) => {
    if (!request.headers.Authorization) {
      const token = localStorage ? localStorage.getItem('token') : null;
      if (token) {
        request.headers.Authorization = token;
      }
    }
    return request;
  },
  (error) => {
    window.location.href = 'login';
    Promise.reject(error);
  },
);

export default axios;
