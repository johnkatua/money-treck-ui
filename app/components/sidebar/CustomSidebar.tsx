import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import React from "react";

const CustomSidebar = () => {
  return (
    <Sidebar>
      <SidebarHeader>Header</SidebarHeader>
      <SidebarContent>Hello</SidebarContent>
      <SidebarFooter>Footer</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
};

export default CustomSidebar;
