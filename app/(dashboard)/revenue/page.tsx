import React from "react";
import PageWrapper from "../../components/page-wrapper";
import CreateRevenue from "./CreateRevenue";
import TabWrapper from "@/app/components/tab-wrapper";
import { tabsHeader } from "@/lib/data";
import RevenueListWrapper from "./RevenueListWrapper";
import TableListWrapper from "@/app/components/table-wrapper/TableListWrapper";
import RevenueList from "./RevenueList";
import { REVENEUS_QUERY_KEY } from "@/app/constants";
import { getRevenues } from "@/app/services";

const tabsContent = [
  {
    value: "View",
    children: (
      <TableListWrapper queryKey={REVENEUS_QUERY_KEY} queryFn={getRevenues}>
        <RevenueList />
      </TableListWrapper>
    ),
    // children: <RevenueListWrapper />,
  },
  {
    value: "Create",
    children: <CreateRevenue />,
  },
];

const Revenue = () => {
  return (
    <PageWrapper title="Revenue">
      <TabWrapper
        defaultValue="View"
        tabsHeader={tabsHeader}
        tabsContent={tabsContent}
      />
    </PageWrapper>
  );
};

export default Revenue;
