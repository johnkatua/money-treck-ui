"use client";

import { useQuery } from "@tanstack/react-query";
import { REVENEUS_QUERY_KEY } from "../constants";
import { getRevenues } from "../services";

export const useRevenues = () => {
  return useQuery({
    queryKey: REVENEUS_QUERY_KEY,
    queryFn: getRevenues,
  });
};
