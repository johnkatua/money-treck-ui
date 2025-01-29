import { tabsHeader } from "@/lib/data";
import { BUDGETS_QUERY_KEY } from "@/app/constants";
import { getBudgets } from "@/app/services/budget";
import PageWrapper from "@/app/components/page-wrapper";
import TabWrapper from "@/app/components/tab-wrapper";
import CreateBudget from "./CreateBudget";
import TableListWrapper from "@/app/components/table-wrapper/TableListWrapper";
import BudgetList from "./BudgetList";

const tabsContent = [
  {
    value: "View",
    children: (
      <TableListWrapper queryKey={BUDGETS_QUERY_KEY} queryFn={getBudgets}>
        <BudgetList />
      </TableListWrapper>
    ),
  },
  {
    value: "Create",
    children: <CreateBudget />,
  },
];

const Budget = () => {
  return (
    <PageWrapper title="Budget">
      <TabWrapper
        defaultValue="View"
        tabsHeader={tabsHeader}
        tabsContent={tabsContent}
      />
    </PageWrapper>
  );
};

export default Budget;
