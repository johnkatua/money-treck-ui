import React from "react";
import FormWrapper from "./FormWrapper";
import { useForm } from "react-hook-form";
import CustomFormField from "./CustomFormField";
import { Input } from "@/components/ui/input";
import CustomButton from "../buttons/CustomButton";
import { useUpdateUser } from "@/app/hooks";
import { zodResolver } from "@hookform/resolvers/zod";
import { UpdateFormSchema } from "@/lib/definitions/UpdateFormSchema";
import { z } from "zod";
import toast from "react-hot-toast";

const UpdateProfileForm = () => {
  const { isPending, mutate } = useUpdateUser();
  const form = useForm<z.infer<typeof UpdateFormSchema>>({
    resolver: zodResolver(UpdateFormSchema),
    defaultValues: {
      name: "",
      email: "",
      currency: "KSH",
      phoneNumber: "",
      avatar: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values: z.infer<typeof UpdateFormSchema>) => {
    const formData = new FormData();
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("currency", values.currency);
    formData.append("phoneNumber", values.phoneNumber);
    if (values.avatar) {
      formData.append("avatar", values.avatar[0]);
    }

    mutate(formData, {
      onSuccess: () => {
        toast.success("Profile updated successfully");
      },
      onError: (error: any) => {
        toast.error(error.message);
      },
    });
  };

  const { control } = form;
  return (
    <FormWrapper form={form} onSubmit={onSubmit} addStyling={false}>
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
      <CustomFormField label="Profile Picture" name="avatar" control={control}>
        <Input type="file" />
      </CustomFormField>
      <div className="h-2" />
      <CustomButton
        type="submit"
        className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-md transition-all duration-300"
        disabled={isPending}
        text={isPending ? "Please Wait" : "Update Profile"}
      />
    </FormWrapper>
  );
};

export default UpdateProfileForm;
