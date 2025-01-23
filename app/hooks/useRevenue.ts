import { useQuery } from "react-query";
import { axiosInterceptorInstance } from "../api/axios-interceptor-instance";
import { REVENEUS_QUERY_KEY } from "../constants";

export const useRevenue = () => {
  useQuery({
    queryKey: REVENEUS_QUERY_KEY,
    queryFn: async () => await axiosInterceptorInstance.get("/"),
  });
};
