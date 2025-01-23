import { useQuery } from "react-query";
import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";

export const useRevenue = () => {
  useQuery({
    queryKey: ["revenues"],
    queryFn: async () => await axiosInterceptorInstance.get("/"),
  });
};
