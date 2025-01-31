"use client";

import CustomButton from "@/app/components/buttons/CustomButton";
import CustomFormField from "@/app/components/forms/CustomFormField";
import CustomSelect from "@/app/components/forms/CustomSelect";
import FormWrapper from "@/app/components/forms/FormWrapper";
import { REVENEUS_QUERY_KEY } from "@/app/constants";
import { useCreateRevenue } from "@/app/hooks";
import { Input } from "@/components/ui/input";
import { SelectItem } from "@/components/ui/select";
import { periodItems } from "@/lib/data";
import { RevenueFormSchema } from "@/lib/definitions/RevenueFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const CreateRevenue = () => {
  const { isPending, mutate } = useCreateRevenue();
  const form = useForm<z.infer<typeof RevenueFormSchema>>({
    resolver: zodResolver(RevenueFormSchema),
    defaultValues: {
      name: "",
      amount: 10,
      period: "daily",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values: z.infer<typeof RevenueFormSchema>) => {
    const queryClient = useQueryClient();
    mutate(values, {
      onSuccess: () => {
        toast.success("Revenue created successfully");
        queryClient.invalidateQueries({
          queryKey: REVENEUS_QUERY_KEY,
        });
      },
      onError: (error: any) => {
        toast.error(error.message);
      },
    });
  };

  const { control } = form;

  return (
    <FormWrapper formTitle="Add New Revenue" form={form} onSubmit={onSubmit}>
      <CustomFormField control={control} name="name" label="Revenue Name *">
        <Input placeholder="New Revenue" />
      </CustomFormField>
      <CustomFormField control={control} name="amount" label="Revenue Amount *">
        <Input type="number" placeholder="1500" />
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
      <div className="h2" />
      <CustomButton
        text={isPending ? "Please Wait" : "Add Budget"}
        type="submit"
        disabled={isPending}
        className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-md transition-all duration-300"
      />
    </FormWrapper>
  );
};

export default CreateRevenue;
