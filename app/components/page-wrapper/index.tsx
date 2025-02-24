"use client";

import { FC, ReactNode } from "react";
import Header from "../header";
import { Menu } from "lucide-react";
import CustomSheet from "../custom-sheet";
import { useSheet } from "@/app/stores";
import CustomSidebar from "../sidebar/CustomSidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";

interface PageWrapperProps {
  title: string;
  children: ReactNode;
}

const PageWrapper: FC<PageWrapperProps> = ({ title, children }) => {
  const { switchSheetState } = useSheet();
  return (
    <div className="relative h-full w-full">
      <div className="flex items-center justify-between sticky top-0 left-0 p-2 bg-white shadow-md z-10">
        <Header title={title} />
        {/* <button
          onClick={() => switchSheetState("sidebar")}
          className="md:hidden text-white bg-[--theme-color-one] p-2 rounded-md"
        > */}
        {/* <Menu size={24} /> */}
        <SidebarTrigger />
        {/* </button> */}
      </div>
      <div className="p-4">{children}</div>
      {/* <CustomSheet id="sidebar">
        <div>Hello</div>
        <CustomSidebar />
      </CustomSheet> */}
    </div>
  );
};

export default PageWrapper;
