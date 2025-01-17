import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
  SidebarRail,
} from "@/components/ui/sidebar";
import React from "react";

const CustomSidebar = () => {
  return (
    <SidebarProvider open={true}>
      <Sidebar collapsible="icon" className="bg-green w-[300px]">
        <SidebarHeader>Header</SidebarHeader>
        <SidebarContent>Hello</SidebarContent>
        <SidebarFooter>Footer</SidebarFooter>
        {/* <SidebarRail /> */}
      </Sidebar>
    </SidebarProvider>
  );
};

export default CustomSidebar;
