import axios, { AxiosInstance } from "axios";

const customAxios: AxiosInstance = axios.create({
  baseURL: "https://youtube.anys34.com",
  withCredentials: true,
});

customAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  config.headers.Authorization = token;
  return config;
});

export default customAxios;
