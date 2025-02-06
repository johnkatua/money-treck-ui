"use client";

import { useMutation, useQuery } from "@tanstack/react-query";
import { USER_QUERY_KEY } from "../constants";
import { getUser, updateUser } from "../services";

export const useUser = () => {
  return useQuery({
    queryKey: USER_QUERY_KEY,
    queryFn: getUser,
  });
};

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: updateUser,
  });
};
