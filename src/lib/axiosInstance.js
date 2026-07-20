import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  if (config.headers.Authorization) return config;
  const token =
    localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
    //config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});