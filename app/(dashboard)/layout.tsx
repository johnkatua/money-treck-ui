import { ReactNode } from "react";
import CustomSidebar from "../components/sidebar/CustomSidebar";

const Dashboard = ({ children }: { children?: ReactNode }) => {
  return (
    <div className="bg-[--theme-color-one] text-white h-screen flex gap-4">
      <div className="w-[200px] p-2 overflow-hidden">
        <CustomSidebar />
      </div>
      <div className="flex-1 py-4 pr-4">
        <div className="h-full bg-white text-[--theme-color-one] rounded-lg overflow-y-auto scrollbar">
          <div className="h-[900px]">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
