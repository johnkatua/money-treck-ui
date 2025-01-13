"use client";

import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import CustomFormField from "./CustomFormField";

const formSchema = z.object({
  name: z.string().min(2).max(50),
  email: z.string(),
  password: z.string(),
});

const SignupForm = () => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });
  return (
    <Form {...form}>
      <form className="px-2 py-2">
        <CustomFormField control={form.control} name="name" label="Name">
          <Input placeholder="Test User" />
        </CustomFormField>
        <CustomFormField control={form.control} name="email" label="Email">
          <Input placeholder="test.user@gmail.com" />
        </CustomFormField>
        <CustomFormField
          control={form.control}
          name="password"
          label="Password"
        >
          <Input placeholder="***********" type="password" />
        </CustomFormField>
      </form>
    </Form>
  );
};

export default SignupForm;
