import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://workintech-fe-ecommerce.onrender.com',
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


//baseURL: 'https://workintech-fe-ecommerce.onrender.com'
//baseURL: 'http://localhost:8080'