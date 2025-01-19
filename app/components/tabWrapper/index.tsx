"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FC, ReactNode } from "react";

interface TabHeader {
  value: string;
  title: string;
}

interface TabContent {
  value: string;
  children: ReactNode;
}

interface TabWrapperProps {
  defaultValue: string;
  tabsHeader: TabHeader[];
  tabsContent: TabContent[];
}

const TabWrapper: FC<TabWrapperProps> = ({
  defaultValue,
  tabsHeader,
  tabsContent,
}) => {
  return (
    <Tabs defaultValue={defaultValue} className="w-full">
      {/* Tab Headers */}
      <TabsList className="grid grid-cols-2 w-full">
        {tabsHeader.map(({ value, title }) => (
          <TabsTrigger key={value} value={value}>
            {title}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tab Content */}
      {tabsContent.map(({ value, children }) => (
        <TabsContent key={value} value={value}>
          {children}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabWrapper;
