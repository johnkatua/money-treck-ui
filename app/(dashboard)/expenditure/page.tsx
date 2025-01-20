import PageWrapper from "@/app/components/pageWrapper";
import TabWrapper from "@/app/components/tabWrapper";
import ExpenditureList from "./ExpenditureList";
import CreateExpenditure from "./CreateExpenditure";
import { tabsHeader } from "@/lib/data";

const tabsContent = [
  {
    value: "View",
    children: <ExpenditureList />,
  },
  {
    value: "Create",
    children: <CreateExpenditure />,
  },
];

const Expenses = () => {
  return (
    <PageWrapper title="Expenses">
      <TabWrapper
        defaultValue="View"
        tabsHeader={tabsHeader}
        tabsContent={tabsContent}
      />
    </PageWrapper>
  );
};

export default Expenses;
