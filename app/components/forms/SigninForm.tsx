"use client";

import { Form } from "@/components/ui/form";
import { signinFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import CustomFormField from "./CustomFormField";

const SigninForm = () => {
  const form = useForm<z.infer<typeof signinFormSchema>>({
    resolver: zodResolver(signinFormSchema),
  });

  const onSubmit = (values: z.infer<typeof signinFormSchema>) => {
    console.log(values);
  };

  const { control } = form;
  return (
    <Form {...form}>
      <form>
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
      </form>
    </Form>
  );
};

export default SigninForm;
