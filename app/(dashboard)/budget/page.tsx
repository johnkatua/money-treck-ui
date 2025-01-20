import PageWrapper from "@/app/components/page-wrapper";
import TabWrapper from "@/app/components/tabWrapper";
import { tabsHeader } from "@/lib/data";
import BudgetList from "./BudgetList";
import CreateBudget from "./CreateBudget";

const tabsContent = [
  {
    value: "View",
    children: <BudgetList />,
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
