import CustomFormField from "@/app/components/forms/CustomFormField";
import CustomSelect from "@/app/components/forms/CustomSelect";
import FormWrapper from "@/app/components/forms/FormWrapper";
import { useBudget } from "@/app/hooks";
import { getBudgets } from "@/app/services";
import { useExpenditureStore } from "@/app/stores/use-expenditure";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SelectItem } from "@/components/ui/select";
import { ExpenditureFormSchema } from "@/lib/definitions/ExpenditureFormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const EditExpenditureForm = () => {
  const { data, isPending: isLoadingData } = useBudget();
  const [budget, setBudget] = useState(data);
  const { selectedExpenditure, updateSelectedExpenditure } =
    useExpenditureStore();
  const form = useForm<z.infer<typeof ExpenditureFormSchema>>({
    resolver: zodResolver(ExpenditureFormSchema),
    defaultValues: {
      name: selectedExpenditure?.name,
      amount: selectedExpenditure?.amount,
      budget_id: "",
    },
  });
  const { control, watch, setValue } = form;

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
    <FormWrapper addStyling={false} form={form} onSubmit={() => {}}>
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
    </FormWrapper>
  );
};

export default EditExpenditureForm;
