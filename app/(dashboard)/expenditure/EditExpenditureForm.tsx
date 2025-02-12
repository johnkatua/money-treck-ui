import CustomButton from "@/app/components/buttons/CustomButton";
import CustomFormField from "@/app/components/forms/CustomFormField";
import CustomSelect from "@/app/components/forms/CustomSelect";
import FormWrapper from "@/app/components/forms/FormWrapper";
import { useBudget, useUpdateExpense } from "@/app/hooks";
import { getBudgets } from "@/app/services";
import { useSheet } from "@/app/stores";
import { useExpenditureStore } from "@/app/stores/use-expenditure";
import { Input } from "@/components/ui/input";
import { SelectItem } from "@/components/ui/select";
import { ExpenditureFormSchema } from "@/lib/definitions/ExpenditureFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const EditExpenditureForm = () => {
  const { switchSheetState } = useSheet();
  const { isPending, mutate } = useUpdateExpense();
  const { data, isPending: isLoadingData } = useBudget();
  const [budget, setBudget] = useState(data);
  const { selectedExpenditure, updateSelectedExpenditure } =
    useExpenditureStore();
  const form = useForm<z.infer<typeof ExpenditureFormSchema>>({
    resolver: zodResolver(ExpenditureFormSchema),
    defaultValues: {
      name: selectedExpenditure?.name,
      amount: selectedExpenditure?.amount,
      budget_id: selectedExpenditure?.budget_id,
    },
    mode: "onBlur",
  });
  const { control, watch, reset, setValue } = form;

  const onSubmit = async (values: z.infer<typeof ExpenditureFormSchema>) => {
    if (selectedExpenditure) {
      const { _id } = selectedExpenditure;
      values = { _id, ...values };
    }
    mutate(values, {
      onSuccess: () => {
        toast.success("Expenditure update successfully");
      },
      onError: (error: unknown) => {
        if (error instanceof Error) {
          toast.error(error.message);
        } else {
          toast.error("An unexpected error occurred");
        }
      },
      onSettled: () => {
        reset();
        switchSheetState(null);
        updateSelectedExpenditure(null);
      },
    });
  };

  useEffect(() => {
    const refetchBudgetData = async () => {
      if (!budget) {
        const data = await getBudgets();
        setBudget(data);
      }
    };
    refetchBudgetData();
  }, []);
  return (
    <FormWrapper addStyling={false} form={form} onSubmit={onSubmit}>
      <CustomFormField control={control} name="name" label="Expenditure Name *">
        <Input />
      </CustomFormField>
      <CustomFormField
        control={control}
        name="amount"
        label="Expenditure Amount *"
      >
        <Input type="number" />
      </CustomFormField>
      <CustomFormField control={control} name="budget_id" label="Budget *">
        <CustomSelect
          placeholder="Select Budget"
          value={watch("budget_id")}
          onValueChange={(val) => setValue("budget_id", val)}
        >
          {budget &&
            budget.map(({ _id, name }) => (
              <SelectItem key={_id} value={_id}>
                {name}
              </SelectItem>
            ))}
        </CustomSelect>
      </CustomFormField>
      <CustomButton
        text={isPending ? "Please Wait" : "Edit Budget"}
        type="submit"
        disabled={isPending}
        className="submit-button"
      />
    </FormWrapper>
  );
};

export default EditExpenditureForm;
