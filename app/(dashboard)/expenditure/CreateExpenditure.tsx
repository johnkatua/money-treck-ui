"use client";

import CustomButton from "@/app/components/buttons/CustomButton";
import CustomFormField from "@/app/components/forms/CustomFormField";
import CustomSelect from "@/app/components/forms/CustomSelect";
import FormWrapper from "@/app/components/forms/FormWrapper";
import toast from "react-hot-toast";
import { useBudget, useCreateExpense } from "@/app/hooks";
import { getBudgets } from "@/app/services";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SelectItem } from "@/components/ui/select";
import { ExpenditureFormSchema } from "@/lib/definitions/ExpenditureFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const CreateExpenditure = () => {
  const { isPending, mutate } = useCreateExpense();
  const { data, isPending: isLoadingData } = useBudget();
  const [budget, setBudget] = useState(data);

  useEffect(() => {
    const refetchBudgetData = async () => {
      if (!budget) {
        const data = await getBudgets();
        setBudget(data);
      }
    };
    refetchBudgetData();
  }, []);

  const form = useForm<z.infer<typeof ExpenditureFormSchema>>({
    resolver: zodResolver(ExpenditureFormSchema),
  });

  const onSubmit = async (values: z.infer<typeof ExpenditureFormSchema>) => {
    mutate(values, {
      onSuccess: () => {
        toast.success("Expense created successfully");
      },
      onError: (error: any) => {
        toast.error(error.message);
      },
    });
  };

  const { control } = form;
  return (
    <FormWrapper formTitle="Add New Expense" form={form} onSubmit={onSubmit}>
      <CustomFormField control={control} name="name" label="Name *">
        <Input placeholder="New Expense" />
      </CustomFormField>
      <CustomFormField control={control} name="amount" label="Amount *">
        <Input type="number" />
      </CustomFormField>
      <CustomFormField control={control} name="budget_id" label="Budget *">
        <CustomSelect
          placeholder="Select Budget"
          onValueChange={(value) => form.setValue("budget_id", value)}
        >
          {isLoadingData ? (
            <div className="flex flex-col items-center gap-4 p-6">
              <Loader2 className="w-8 h-8 animate-spin text-gray-600" />
              <p className="text-gray-600 text-sm">Loading data...</p>
            </div>
          ) : budget && budget.length > 0 ? (
            budget.map(({ _id, name }) => (
              <SelectItem key={_id} value={_id}>
                {name}
              </SelectItem>
            ))
          ) : (
            <Card className="bg-gray-50 shadow-md border border-gray-200 rounded-bl-md rounded-s-none rounded-e-none rounded-br-md">
              <CardContent className="flex flex-col items-center gap-4 p-6">
                <AlertCircle className="w-10 h-10 text-gray-600" />
                <p className="text-gray-600 text-sm">No data available.</p>
              </CardContent>
            </Card>
          )}
        </CustomSelect>
      </CustomFormField>
      <div className="h-2" />
      <CustomButton
        text={isPending ? "Please Wait" : "Add Expense"}
        type="submit"
        disabled={isPending}
        className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-md transition-all duration-300"
      />
    </FormWrapper>
  );
};

export default CreateExpenditure;
