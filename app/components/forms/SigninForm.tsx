"use client";

import CustomFormField from "./CustomFormField";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { login } from "@/app/actions/auth";
import { SignInFormSchema } from "@/lib/definitions/SignInFormSchema";
import { useSignin } from "@/app/hooks";
import toast from "react-hot-toast";
import CustomButton from "../buttons/CustomButton";

const SigninForm = () => {
  const { isPending, mutate } = useSignin();
  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
  });

  const onSubmit = async (values: z.infer<typeof SignInFormSchema>) => {
    mutate(values, {
      onSuccess: () => {
        toast.success("Signin successfully");
      },
      onError: (error: any) => {
        toast.error(error);
      },
    });
  };

  const { control, handleSubmit } = form;
  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-2 py-2 flex gap-4 flex-col"
      >
        <CustomFormField control={control} name="email" label="Email *">
          <Input placeholder="test.user@gmail.com" />
        </CustomFormField>
        <CustomFormField
          control={form.control}
          name="password"
          label="Password *"
        >
          <Input placeholder="***********" type="password" />
        </CustomFormField>
        <CustomButton
          text={isPending ? "Please Wait" : "Sign In"}
          type="submit"
          disabled={isPending}
        />
      </form>
    </Form>
  );
};

export default SigninForm;
