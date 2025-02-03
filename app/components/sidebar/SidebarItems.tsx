"use client";

import {
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import path from "path";
import React from "react";

const SidebarItems = ({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon: LucideIcon;
  };
}) => {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <SidebarMenu>
      {items?.map((item) => (
        <SidebarMenuItem key={item.title} className="cursor-pointer">
          <SidebarMenuButton
            asChild
            onClick={() => router.push(item.url)}
            className={pathname === item.url ? "bg-white text-black" : ""}
          >
            <div>
              <item.icon />
              <span>{item.title}</span>
            </div>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
};

export default SidebarItems;
