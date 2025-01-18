import { SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar";
import Image from "next/image";
import React from "react";

const SidebarTitle = () => {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <Image
          src={"/images/logo-small-removebg-gold.png"}
          width={200}
          height={50}
          priority
          alt="Logo-title"
        />
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default SidebarTitle;
