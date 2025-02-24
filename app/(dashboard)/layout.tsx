"use client";

import { ReactNode } from "react";
import CustomSidebar from "../components/sidebar/CustomSidebar";
import { useIsMobile } from "@/hooks/use-mobile";

const Dashboard = ({ children }: { children?: ReactNode }) => {
  const isMobile = useIsMobile();
  return (
    <div className="bg-[--theme-color-one] text-white h-screen flex">
      {isMobile || (
        <aside className="w-[200px] p-2 overflow-hidden">
          <CustomSidebar />
        </aside>
      )}
      <main className="flex-1 p-4">
        <div className="h-full bg-white text-[--theme-color-one] rounded-lg overflow-y-auto scrollbar">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
