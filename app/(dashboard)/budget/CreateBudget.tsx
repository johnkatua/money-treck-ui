"use client";

import CustomButton from "@/app/components/buttons/CustomButton";
import CustomFormField from "@/app/components/forms/CustomFormField";
import FormWrapper from "@/app/components/forms/FormWrapper";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const CreateBudget = () => {
  const form = useForm<>({
    resolver: zodResolver(),
  });

  const onSubmit = async (values) => {
    console.log(values);
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
        <Select></Select>
      </CustomFormField>
      <CustomButton
        text="Add Budget"
        type="submit"
        disabled={false}
        className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-md transition-all duration-300"
      />
    </FormWrapper>
  );
};

export default CreateBudget;
