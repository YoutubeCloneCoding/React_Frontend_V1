import axios, { AxiosInstance } from "axios";

const customAxios: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  withCredentials: true,
});

customAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

customAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response.status !== 401) {
      return Promise.reject(error);
    }
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/token`,
        {
          refreshToken,
        },
      );
      localStorage.setItem("accessToken", data.accessToken);
    } catch {}
  },
);

export default customAxios;
