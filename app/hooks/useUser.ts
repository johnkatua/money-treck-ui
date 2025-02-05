import { useQuery } from "@tanstack/react-query";
import { USER_QUERY_KEY } from "../constants";
import { getUser } from "../services";

export const useUser = () => {
  return useQuery({
    queryKey: USER_QUERY_KEY,
    queryFn: getUser,
  });
};
