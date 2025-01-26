import { useQuery } from "@tanstack/react-query";
import { REVENEUS_QUERY_KEY } from "../constants";
import { getRevenues } from "../services";

export const useRevenues = () => {
  useQuery({
    queryKey: REVENEUS_QUERY_KEY,
    queryFn: getRevenues,
  });
};
