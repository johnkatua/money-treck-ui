"use client";

import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { signupFormSchema } from "@/lib/schemas";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import CustomFormField from "./CustomFormField";

const SignupForm = () => {
  const form = useForm<z.infer<typeof signupFormSchema>>({
    resolver: zodResolver(signupFormSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = (values: z.infer<typeof signupFormSchema>) => {
    console.log(values);
  };

  const { control, handleSubmit } = form;
  return (
    <Form {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-2 py-2 flex gap-4 flex-col"
      >
        <CustomFormField control={control} name="name" label="Name">
          <Input placeholder="Test User" />
        </CustomFormField>
        <CustomFormField control={control} name="email" label="Email">
          <Input placeholder="test.user@gmail.com" />
        </CustomFormField>
        <CustomFormField
          control={form.control}
          name="password"
          label="Password"
        >
          <Input placeholder="***********" type="password" />
        </CustomFormField>
        <Button type="submit">Sign Up</Button>
      </form>
    </Form>
  );
};

export default SignupForm;
