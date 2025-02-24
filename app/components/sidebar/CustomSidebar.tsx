"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { sidebarData } from "@/lib/data";
import SidebarItems from "./SidebarItems";
import SidebarTitle from "./SidebarTitle";
import SidebarUser from "./SidebarUser";

const { user, items } = sidebarData;

const CustomSidebar = () => {
  return (
    <Sidebar
      collapsible="icon"
      className="bg-[--theme-color-three] text-white max-w-[200px] border-none"
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
  );
};

export default CustomSidebar;
