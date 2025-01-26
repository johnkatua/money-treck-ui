import { useMutation } from "@tanstack/react-query";
import { signin } from "../services";

export const useSignin = () => {
  return useMutation({
    mutationFn: signin,
  });
};
