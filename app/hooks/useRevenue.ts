import { useQuery } from "react-query";
import { REVENEUS_QUERY_KEY } from "../constants";
import { getRevenues } from "../services";

export const useRevenue = () => {
  useQuery({
    queryKey: REVENEUS_QUERY_KEY,
    queryFn: getRevenues,
  });
};
