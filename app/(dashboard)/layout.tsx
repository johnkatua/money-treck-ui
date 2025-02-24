"use client";

import { ReactNode } from "react";
import CustomSidebar from "../components/sidebar/CustomSidebar";
import { useIsMobile } from "@/hooks/use-mobile";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const Dashboard = ({ children }: { children?: ReactNode }) => {
  const isMobile = useIsMobile();
  return (
    <SidebarProvider className="bg-black w-full">
      <div className="bg-[--theme-color-one] w-full text-white h-screen flex">
        {/* {isMobile || ( */}
        <aside className="overflow-hidden">
          <CustomSidebar />
        </aside>
        {/* )} */}
        <main className="flex-1 p-4">
          {/* <SidebarTrigger /> */}
          <div className="h-full bg-white text-[--theme-color-one] rounded-lg overflow-y-auto scrollbar w-full">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
