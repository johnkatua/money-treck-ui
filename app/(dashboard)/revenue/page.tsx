import React from "react";
import PageWrapper from "../../components/pageWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RevenueList from "./RevenueList";
import CreateRevenue from "./CreateRevenue";
import TabWrapper from "@/app/components/tabWrapper";

const tabsHeader = [
  {
    value: "View",
    title: "View",
  },
  {
    value: "Create",
    title: "Create",
  },
];

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
