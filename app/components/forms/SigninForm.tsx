"use client";

import { Form } from "@/components/ui/form";
import { signinFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const SigninForm = () => {
  const form = useForm<z.infer<typeof signinFormSchema>>({
    resolver: zodResolver(signinFormSchema),
  });
  return <Form></Form>;
};

export default SigninForm;
