"use client";

import CustomButton from "@/app/components/buttons/CustomButton";
import CustomDialog from "@/app/components/custom-dialog";
import CustomFormField from "@/app/components/forms/CustomFormField";
import CustomSelect from "@/app/components/forms/CustomSelect";
import FormWrapper from "@/app/components/forms/FormWrapper";
import { useDeleteRevenue, useUpdateRevenue } from "@/app/hooks";
import { useDialogStore, useRevenueStore } from "@/app/stores";
import { Input } from "@/components/ui/input";
import { SelectItem } from "@/components/ui/select";
import { periodItems } from "@/lib/data";
import { RevenueFormSchema } from "@/lib/definitions/RevenueFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const EditRevenueForm = () => {
  const router = useRouter();
  const { selectedRevenue } = useRevenueStore();
  const { openDialog, closeDialog } = useDialogStore();
  const { isPending, mutate } = useUpdateRevenue();
  const { isPending: isDeleting, mutate: deleteMutate } = useDeleteRevenue();
  const form = useForm<z.infer<typeof RevenueFormSchema>>({
    resolver: zodResolver(RevenueFormSchema),
    defaultValues: {
      name: selectedRevenue?.name || "",
      amount: selectedRevenue?.amount || 10,
      period:
        (selectedRevenue?.period as
          | "daily"
          | "weekly"
          | "monthly"
          | "yearly") || "daily",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values: z.infer<typeof RevenueFormSchema>) => {
    if (selectedRevenue) {
      values = { _id: selectedRevenue._id, ...values };
    }
    mutate(values, {
      onSuccess: () => {
        toast.success("Revenue updated successfully");
        router.push("/revenue");
      },
      onError: (error: unknown) => {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("An unexpected error occurred");
        }
      },
      onSettled: () => form.reset(),
    });
  };

  const handleDelete = async () => {
    const id = selectedRevenue?._id;
    if (id) {
      deleteMutate(id, {
        onSuccess: () => {
          toast.success("Revenue deleted successfully");
          router.push("/revenue");
        },
        onError: (error: unknown) => {
          if (error instanceof Error) {
            toast.error(error.message);
          } else {
            toast.error("An unexpected error occurred");
          }
        },
        onSettled: () => closeDialog(),
      });
    } else {
      toast.error("Please select a revenue");
      closeDialog();
    }
  };

  const { control } = form;
  return (
    <>
      <FormWrapper
        formTitle="Edit Revenue"
        form={form}
        onSubmit={onSubmit}
        isUpdate={true}
      >
        <CustomFormField control={control} name="name" label="Revenue Name *">
          <Input />
        </CustomFormField>
        <CustomFormField
          control={control}
          name="amount"
          label="Revenue Amount *"
        >
          <Input type="number" />
        </CustomFormField>
        <CustomFormField
          control={control}
          name="period"
          label="Revenue Period *"
        >
          <CustomSelect
            placeholder="Select Period"
            value={form.watch("period")}
            onValueChange={(val) => form.setValue("period", val)}
          >
            {periodItems?.map(({ name, value }) => (
              <SelectItem key={value} value={value}>
                {name}
              </SelectItem>
            ))}
          </CustomSelect>
        </CustomFormField>
        <div className="flex">
          <CustomButton
            text={isPending ? "Please Wait" : "Edit Revenue"}
            type="submit"
            disabled={isPending}
            className="w-full mt-2 bg-green-500 hover:bg-green-600 text-white p-3 rounded-md transition-all duration-300"
          />
        </div>
      </FormWrapper>
      <CustomButton
        text={"Delete Revenue"}
        type="submit"
        onClick={openDialog}
        disabled={false}
        className="w-full mt-2 bg-black text-white p-3 rounded-md transition-all duration-300"
      />
      <CustomDialog>
        <CustomButton
          text={isDeleting ? "Please Wait" : "Delete Revenue"}
          type="submit"
          onClick={handleDelete}
          disabled={isDeleting}
          className="w-full mt-2 bg-red-500 hover:bg-red-600 text-white p-3 rounded-md transition-all duration-300"
        />
      </CustomDialog>
    </>
  );
};

export default EditRevenueForm;
