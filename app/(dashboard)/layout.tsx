"use client";

import { ReactNode } from "react";
import CustomSidebar from "../components/sidebar/CustomSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

const Dashboard = ({ children }: { children?: ReactNode }) => {
  return (
    <SidebarProvider className="bg-black w-full">
      <div className="bg-[--theme-color-one] w-full text-white h-screen flex">
        <aside className="overflow-hidden">
          <CustomSidebar />
        </aside>
        <main className="flex-1 p-4">
          <div className="h-full bg-white text-[--theme-color-one] rounded-lg overflow-y-auto scrollbar w-full">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
