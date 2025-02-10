"use client";

import FormWrapper from "@/app/components/forms/FormWrapper";
import React from "react";
import { useForm } from "react-hook-form";

const EditRevenueForm = () => {
  const form = useForm({});
  return (
    <FormWrapper
      formTitle="Edit Revenue"
      form={form}
      onSubmit={() => {}}
      isUpdate={true}
    >
      <div>Edit</div>
    </FormWrapper>
  );
};

export default EditRevenueForm;
