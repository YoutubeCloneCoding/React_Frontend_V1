import { useQuery } from "@tanstack/react-query";
import customAxios from "lib/customAxios";

const useUser = () => {
  const { data: userInfo } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await customAxios.get("/api/profile");
      return data;
    },
    enabled: !!localStorage.getItem("accessToken"),
  });

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    window.location.reload();
  };
  return {
    user: userInfo,
    isLogin: !!userInfo,
    logout,
  };
};

export default useUser;
