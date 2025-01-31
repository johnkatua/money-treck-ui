"use client";

import CustomButton from "@/app/components/buttons/CustomButton";
import CustomFormField from "@/app/components/forms/CustomFormField";
import CustomSelect from "@/app/components/forms/CustomSelect";
import FormWrapper from "@/app/components/forms/FormWrapper";
import { useCreateBudget } from "@/app/hooks";
import { Input } from "@/components/ui/input";
import { SelectItem } from "@/components/ui/select";
import { periodItems } from "@/lib/data";
import { BudgetFormSchema } from "@/lib/definitions/BudgetFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const CreateBudget = () => {
  const { isPending, mutate } = useCreateBudget();
  const form = useForm<z.infer<typeof BudgetFormSchema>>({
    resolver: zodResolver(BudgetFormSchema),
    defaultValues: {
      name: "",
      amount: 10,
      period: "daily",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values: z.infer<typeof BudgetFormSchema>) => {
    mutate(values, {
      onSuccess: () => {
        toast.success("Budget created successfully");
      },
      onError: (error: any) => {
        toast.error(error.message);
      },
    });
  };

  const { control } = form;

  return (
    <FormWrapper formTitle="Add New Budget" form={form} onSubmit={onSubmit}>
      <CustomFormField control={control} name="name" label="Name *">
        <Input placeholder="New Budget" />
      </CustomFormField>
      <CustomFormField control={control} name="amount" label="Amount *">
        <Input />
      </CustomFormField>
      <CustomFormField control={control} name="period" label="Period *">
        <CustomSelect
          placeholder="Select Period"
          onValueChange={(value) => form.setValue("period", value)}
        >
          {periodItems?.map(({ name, value }) => (
            <SelectItem key={value} value={value}>
              {name}
            </SelectItem>
          ))}
        </CustomSelect>
      </CustomFormField>
      <CustomButton
        text={isPending ? "Please Wait" : "Add Budget"}
        type="submit"
        disabled={isPending}
        className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-md transition-all duration-300"
      />
    </FormWrapper>
  );
};

export default CreateBudget;
