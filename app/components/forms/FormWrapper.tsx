import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";
import { FieldValues, UseFormReturn } from "react-hook-form";
import CustomButton from "../buttons/CustomButton";

interface IFormWrapperProps<T extends FieldValues> {
  formTitle?: string;
  children: ReactNode;
  form: UseFormReturn<T>;
  onSubmit: (data: any) => void;
  addStyling?: boolean;
  isUpdate?: boolean;
}

const FormWrapper = <T extends FieldValues>({
  formTitle,
  form,
  onSubmit,
  children,
  isUpdate = false,
  addStyling = true,
}: IFormWrapperProps<T>) => {
  const { handleSubmit } = form;
  const router = useRouter();
  return (
    <Card
      className={
        addStyling
          ? "bg-white rounded-lg hover:shadow-lg"
          : "shadow-none border-none"
      }
    >
      <CardHeader className="font-semibold text-2xl text-gray-800">
        <div>
          {isUpdate && (
            <CustomButton
              type="reset"
              disabled={false}
              text={<MoveLeft />}
              onClick={() => router.back()}
              className="w-4 h-8 rounded-none rounded-tr-md rounded-bl-md"
            />
          )}
          <span className={isUpdate ? "ml-4" : ""}>{formTitle}</span>
        </div>
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
