"use client";

import { tabsHeader } from "@/lib/data";
import { REVENEUS_QUERY_KEY } from "@/app/constants";
import { getRevenues } from "@/app/services";
import PageWrapper from "../../components/page-wrapper";
import CreateRevenue from "./CreateRevenue";
import TabWrapper from "@/app/components/tab-wrapper";
import TableListWrapper from "@/app/components/table-wrapper/TableListWrapper";
import RevenueList from "./RevenueList";
import CustomDialog from "@/app/components/custom-dialog";

const tabsContent = [
  {
    value: "View",
    children: (
      <TableListWrapper queryKey={REVENEUS_QUERY_KEY} queryFn={getRevenues}>
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
    <PageWrapper title="Revenue">
      <TabWrapper
        defaultValue="View"
        tabsHeader={tabsHeader}
        tabsContent={tabsContent}
      />
      <CustomDialog />
    </PageWrapper>
  );
};

export default Revenue;
