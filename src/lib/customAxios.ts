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
        "https://youtube.anys34.com/api/token",
        {
          refreshToken,
        },
      );
      localStorage.setItem("accessToken", data.accessToken);
    } catch (err) {
      alert("refresh Token이 만료되었습니다");
    }
  },
);

export default customAxios;
