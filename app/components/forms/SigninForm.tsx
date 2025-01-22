"use client";

import CustomFormField from "./CustomFormField";
import { Form } from "@/components/ui/form";
import { signinFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { login } from "@/app/actions/auth";
import { SignInFormSchema } from "@/lib/definitions/SignInFormSchema";
// import { login } from "@/lib/auth";
import { useActionState } from "react";

const SigninForm = () => {
  // const [state, loginAction] = useActionState(login, undefined);
  // // const router = useRouter();
  const form = useForm<z.infer<typeof SignInFormSchema>>({
    resolver: zodResolver(SignInFormSchema),
  });

  const onSubmit = async (values: z.infer<typeof SignInFormSchema>) => {
    try {
      await login(values);
    } catch (error) {
      console.log(error);
    }
  };

  const { control, handleSubmit } = form;
  return (
    // <form></form>
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
        <Button type="submit">Sign In</Button>
      </form>
    </Form>
  );
};

export default SigninForm;
