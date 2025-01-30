"use client";

import CustomButton from "@/app/components/buttons/CustomButton";
import CustomFormField from "@/app/components/forms/CustomFormField";
import CustomSelect from "@/app/components/forms/CustomSelect";
import FormWrapper from "@/app/components/forms/FormWrapper";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

const CreateExpenditure = () => {
  const form = useForm<>({
    resolver: zodResolver(),
  });

  const onSubmit = async (values) => {
    console.log(values);
  };

  const { control } = form;
  return (
    <FormWrapper formTitle="Add New Expense" form={form} onSubmit={onSubmit}>
      <CustomFormField control={control} name="name" label="Name *">
        <Input placeholder="New Budget" />
      </CustomFormField>
      <CustomFormField control={control} name="amount" label="Amount *">
        <Input type="number" />
      </CustomFormField>
      <CustomFormField control={control} name="budget_id" label="Budget *">
        <CustomSelect placeholder="Select Budget">{[]}</CustomSelect>
      </CustomFormField>
      <div className="h-2" />
      <CustomButton
        text="Add Expense"
        type="submit"
        disabled={false}
        className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-md transition-all duration-300"
      />
    </FormWrapper>
  );
};

export default CreateExpenditure;
