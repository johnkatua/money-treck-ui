import TabWrapper from "@/app/components/tab-wrapper";
import TableListWrapper from "@/app/components/table-wrapper/TableListWrapper";
import { REVENEUS_QUERY_KEY } from "@/app/constants";
import { getRevenues } from "@/app/services";
import { tabsHeader } from "@/lib/data";
import PageWrapper from "../../components/page-wrapper";
import CreateRevenue from "./CreateRevenue";
import RevenueList from "./RevenueList";
import { usePaginationStore } from "@/app/stores/use-pagination";

const tabsContent = [
  {
    value: "View",
    children: (
      <TableListWrapper
        queryKey={[REVENEUS_QUERY_KEY, 1, 5]}
        queryFn={() => getRevenues(1, 5)}
      >
        <RevenueList />
      </TableListWrapper>
    ),
  },
  {
    value: "Create",
    children: <CreateRevenue />,
  },
];
const Revenue = () => {
  return (
    <>
      <PageWrapper title="Revenue">
        <TabWrapper
          defaultValue="View"
          tabsHeader={tabsHeader}
          tabsContent={tabsContent}
        />
      </PageWrapper>
    </>
  );
};

export default Revenue;
