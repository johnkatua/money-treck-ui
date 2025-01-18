"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { sidebarData } from "@/lib/data";
import SidebarUser from "./SidebarUser";
import SidebarItems from "./SidebarItems";
import SidebarTitle from "./SidebarTitle";

const { user, items } = sidebarData;

const CustomSidebar = () => {
  return (
    <SidebarProvider open={true}>
      <Sidebar
        collapsible="icon"
        className="bg-[--theme-color-one] text-white w-[200px] border-none"
      >
        <SidebarHeader className="bg-[--theme-color-one] pb-4">
          <SidebarTitle />
        </SidebarHeader>
        <SidebarContent className="bg-[--theme-color-one]">
          <SidebarItems items={items} />
        </SidebarContent>
        <SidebarFooter className="bg-[--theme-color-one]">
          <SidebarUser user={user} />
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
};

export default CustomSidebar;
