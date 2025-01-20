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
      <TabsList className="flex p-0 justify-between gap-4 mb-6 bg-gradient-to-r from-gray-700 to-black text-white rounded-lg shadow-lg">
        {tabsHeader.map(({ value, title }) => (
          <TabsTrigger
            key={value}
            value={value}
            className="text-lg w-[50%] font-semibold cursor-pointer hover:bg-pink-500 transition-all ease-in-out duration-300"
          >
            {title}
          </TabsTrigger>
        ))}
      </TabsList>

      {/* Tab Content */}
      {tabsContent.map(({ value, children }) => (
        <TabsContent
          key={value}
          value={value}
          className="px-4 py-4 bg-gradient-to-r from-pink-400 to-purple-600 rounded-lg shadow-2xl space-y-6"
        >
          {children}
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default TabWrapper;
