import CustomFormField from "@/app/components/forms/CustomFormField";
import CustomSelect from "@/app/components/forms/CustomSelect";
import FormWrapper from "@/app/components/forms/FormWrapper";
import { Input } from "@/components/ui/input";
import { SelectItem } from "@/components/ui/select";
import { periodItems } from "@/lib/data";
import { BudgetFormSchema } from "@/lib/definitions/BudgetFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const EditBudgetForm = () => {
  const form = useForm<z.infer<typeof BudgetFormSchema>>({
    resolver: zodResolver(BudgetFormSchema),
    defaultValues: {},
    mode: "onBlur",
  });

  const { control, watch, setValue } = form;
  return (
    <FormWrapper addStyling={false} form={form} onSubmit={() => {}}>
      <CustomFormField control={control} name="name" label="Budget Name *">
        <Input />
      </CustomFormField>
      <CustomFormField control={control} name="amount" label="Budget Amount *">
        <Input type="number" />
      </CustomFormField>
      <CustomFormField control={control} name="period" label="Budget Period *">
        <CustomSelect
          placeholder="Select Period"
          value={watch("period")}
          onValueChange={(value) => setValue("period", value)}
        >
          {periodItems?.map(({ name, value }) => (
            <SelectItem key={value} value={value}>
              {name}
            </SelectItem>
          ))}
        </CustomSelect>
      </CustomFormField>
    </FormWrapper>
  );
};

export default EditBudgetForm;
