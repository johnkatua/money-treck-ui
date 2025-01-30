import PageWrapper from "@/app/components/page-wrapper";
import TabWrapper from "@/app/components/tab-wrapper";
import ExpenditureList from "./ExpenditureList";
import CreateExpenditure from "./CreateExpenditure";
import { tabsHeader } from "@/lib/data";
import TableListWrapper from "@/app/components/table-wrapper/TableListWrapper";
import { EXPENSES_QUERY_KEY } from "@/app/constants";
import { getExpenses } from "@/app/services/expenditure";

const tabsContent = [
  {
    value: "View",
    children: (
      <TableListWrapper queryKey={EXPENSES_QUERY_KEY} queryFn={getExpenses}>
        <ExpenditureList />
      </TableListWrapper>
    ),
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
