import { useMutation } from "@tanstack/react-query";
import { signup } from "../services";
import { IUser, IUserResponse } from "../types";

export const useSignup = () => {
  return useMutation<IUserResponse, unknown, IUser>({
    mutationFn: signup,
  });
};
