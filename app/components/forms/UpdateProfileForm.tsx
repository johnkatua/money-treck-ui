import React from "react";
import FormWrapper from "./FormWrapper";
import { useForm } from "react-hook-form";
import CustomFormField from "./CustomFormField";
import { Input } from "@/components/ui/input";
import CustomButton from "../buttons/CustomButton";

const UpdateProfileForm = () => {
  const form = useForm();

  const { control } = form;
  return (
    <FormWrapper form={form} onSubmit={() => {}}>
      <CustomFormField label="Name" name="name" control={control}>
        <Input placeholder="John Doe" />
      </CustomFormField>
      <CustomFormField label="Email" name="email" control={control}>
        <Input placeholder="johndoe@gmail.com" />
      </CustomFormField>
      <CustomFormField label="Currency" name="currency" control={control}>
        <Input placeholder="KSH" />
      </CustomFormField>
      <CustomFormField
        label="Phone Number"
        name="phoneNumber"
        control={control}
      >
        <Input placeholder="+254712345678" />
      </CustomFormField>
      <div className="h-2" />
      <CustomButton
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-md transition-all duration-300"
        disabled={false}
        text="Update Profile"
      />
    </FormWrapper>
  );
};

export default UpdateProfileForm;
