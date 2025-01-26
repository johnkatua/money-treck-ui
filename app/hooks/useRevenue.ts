import { useQuery } from "@tanstack/react-query";
import { REVENEUS_QUERY_KEY } from "../constants";
import { getRevenues } from "../services";
import { Revenue } from "../types";

export const useRevenues = (initialState: Revenue) => {
  console.log(initialState);
  return useQuery({
    queryKey: REVENEUS_QUERY_KEY,
    queryFn: getRevenues,
    initialData: initialState,
    // initialData: [
    //   {
    //     name: "John",
    //     amount: 89,
    //     period: "Daily",
    //     user_id: "8990320",
    //   },
    // ],
  });
};
