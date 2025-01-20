import React from "react";
import PageWrapper from "../../components/page-wrapper";
import RevenueList from "./RevenueList";
import CreateRevenue from "./CreateRevenue";
import TabWrapper from "@/app/components/tabWrapper";
import { tabsHeader } from "@/lib/data";

const tabsContent = [
  {
    value: "View",
    children: <RevenueList />,
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
