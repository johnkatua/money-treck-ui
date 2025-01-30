"use client";

import CustomButton from "@/app/components/buttons/CustomButton";
import CustomFormField from "@/app/components/forms/CustomFormField";
import CustomSelect from "@/app/components/forms/CustomSelect";
import FormWrapper from "@/app/components/forms/FormWrapper";
import { Input } from "@/components/ui/input";
import { SelectItem } from "@/components/ui/select";
import { periodItems } from "@/lib/data";
import { RevenueFormSchema } from "@/lib/definitions/RevenueFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CreateRevenue = () => {
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
    console.log(values);
  };

  const { control } = form;

  return (
    <FormWrapper formTitle="Add New Revenue" form={form} onSubmit={onSubmit}>
      <CustomFormField control={control} name="name" label="Revenue Name *">
        <Input placeholder="New Revenue" />
      </CustomFormField>
      <CustomFormField control={control} name="amount" label="Revenue Amount *">
        <Input
          type="number"
          placeholder="1500"
          defaultValue={10}
          // onChange={(e) => e.target.valueAsNumber}
        />
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
        text="Add Budget"
        type="submit"
        disabled={false}
        className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-md transition-all duration-300"
      />
    </FormWrapper>
  );
};

export default CreateRevenue;
