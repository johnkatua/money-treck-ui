import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { FC, ReactNode } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";

interface IFormWrapperProps<T extends FieldValues> {
  formTitle?: string;
  children: ReactNode;
  form: UseFormReturn<T>;
  onSubmit: (data: any) => void;
}

const FormWrapper = <T extends FieldValues>({
  formTitle,
  form,
  onSubmit,
  children,
}: IFormWrapperProps<T>) => {
  const { handleSubmit } = form;
  return (
    <Card className="bg-white rounded-lg hover:shadow-lg">
      <CardHeader className="font-semibold text-2xl text-gray-800">
        {formTitle}
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {children}
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default FormWrapper;
