import PageWrapper from "@/app/components/page-wrapper";
import TabWrapper from "@/app/components/tab-wrapper";
import { tabsHeader } from "@/lib/data";
import CreateBudget from "./CreateBudget";
import BudgetListWrapper from "./BudgetListWrapper";

const tabsContent = [
  {
    value: "View",
    children: <BudgetListWrapper />,
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
