import React from "react";
import PageWrapper from "../../components/page-wrapper";
import CreateRevenue from "./CreateRevenue";
import TabWrapper from "@/app/components/tab-wrapper";
import { tabsHeader } from "@/lib/data";
import RevenueListWrapper from "./RevenueListWrapper";

const tabsContent = [
  {
    value: "View",
    children: <RevenueListWrapper />,
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
