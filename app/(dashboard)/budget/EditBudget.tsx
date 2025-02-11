import CustomSheet from "@/app/components/custom-sheet";
import { useBudgetStore } from "@/app/stores/use-budget";
import EditBudgetForm from "./EditBudgetForm";

const EditBudget = () => {
  const { selectedBudget } = useBudgetStore();
  return (
    <CustomSheet id={selectedBudget?._id || ""}>
      <EditBudgetForm />
    </CustomSheet>
  );
};

export default EditBudget;
