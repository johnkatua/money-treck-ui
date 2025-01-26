"use client";

import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signupFormSchema } from "@/lib/schemas";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useSignup } from "@/app/hooks";
import CustomFormField from "./CustomFormField";
import toast from "react-hot-toast";
import CustomButton from "../buttons/CustomButton";

const SignupForm = () => {
  const { isPending, mutate } = useSignup();
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof signupFormSchema>) => {
    mutate(values, {
      onSuccess: (data) => {
        console.log(data);
        toast.success("Signup successfully!");
      },
      onError: (error: any) => {
        console.log(error);
        toast.error(error);
      },
    });
    console.log(values);
  };

  const { control, handleSubmit } = form;
  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-2 py-2 flex gap-4 flex-col"
      >
        <CustomFormField control={control} name="name" label="Name *">
          <Input placeholder="Test User" />
        </CustomFormField>
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
        <Button type="submit">{isPending ? "Loading" : "Sign Up"}</Button>
        <CustomButton
          type="submit"
          disabled={isPending}
          text={isPending ? "Please Wait" : "Sign Up"}
        />
      </form>
    </Form>
  );
};

export default SignupForm;
