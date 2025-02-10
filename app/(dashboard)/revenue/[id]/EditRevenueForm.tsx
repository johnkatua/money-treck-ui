"use client";

import CustomButton from "@/app/components/buttons/CustomButton";
import CustomFormField from "@/app/components/forms/CustomFormField";
import CustomSelect from "@/app/components/forms/CustomSelect";
import FormWrapper from "@/app/components/forms/FormWrapper";
import { Input } from "@/components/ui/input";
import { SelectItem } from "@/components/ui/select";
import { periodItems } from "@/lib/data";
import React from "react";
import { useForm } from "react-hook-form";

const EditRevenueForm = () => {
  const form = useForm({});

  const { control } = form;
  return (
    <FormWrapper
      formTitle="Edit Revenue"
      form={form}
      onSubmit={() => {}}
      isUpdate={true}
    >
      <CustomFormField control={control} name="name" label="Revenue Name *">
        <Input />
      </CustomFormField>
      <CustomFormField control={control} name="amount" label="Revenue Amount *">
        <Input type="number" />
      </CustomFormField>
      <CustomFormField control={control} name="period" label="Revenue Period *">
        <CustomSelect
          placeholder="Select Period"
          onValueChange={(val) => form.setValue("period", val)}
        >
          {periodItems?.map(({ name, value }) => (
            <SelectItem key={value} value={value}>
              {name}
            </SelectItem>
          ))}
        </CustomSelect>
      </CustomFormField>
      <div className="flex gap-4 mt-2">
        <CustomButton
          text={"Edit Revenue"}
          type="submit"
          disabled={false}
          className="w-[250px] bg-green-500 hover:bg-green-600 text-white p-3 rounded-md transition-all duration-300"
        />
        <CustomButton
          text={"Delete Revenue"}
          type="submit"
          disabled={false}
          className="w-[250px] bg-red-500 hover:bg-red-600 text-white p-3 rounded-md transition-all duration-300"
        />
      </div>
    </FormWrapper>
  );
};

export default EditRevenueForm;
