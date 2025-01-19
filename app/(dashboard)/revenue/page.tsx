import React from "react";
import PageWrapper from "../../components/pageWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RevenueList from "./RevenueList";
import CreateRevenue from "./CreateRevenue";

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
      <Tabs defaultValue="view">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="view">View</TabsTrigger>
          <TabsTrigger value="create">Create</TabsTrigger>
        </TabsList>
        <TabsContent value="view">
          <RevenueList />
        </TabsContent>
        <TabsContent value="create">
          <CreateRevenue />
        </TabsContent>
      </Tabs>
    </PageWrapper>
  );
};

export default Revenue;
