import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import { TabsTrigger } from "@radix-ui/react-tabs";
import React from "react";

const TabWrapper = ({ defaultValue, tabsHeader, tabsContent }) => {
  return (
    <Tabs defaultValue={defaultValue}>
      <TabsList>
        {tabsHeader.map(({ value, title }) => (
          <TabsTrigger value={value}>{title}</TabsTrigger>
        ))}
      </TabsList>
      {tabsContent?.map(({ value, children }) => (
        <TabsContent value={value}>{children}</TabsContent>
      ))}
    </Tabs>
  );
};

export default TabWrapper;
