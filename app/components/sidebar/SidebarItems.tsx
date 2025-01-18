"use client";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";
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
  return (
    <SidebarMenu>
      {items?.map((item) => (
        <SidebarMenuItem key={item.title}>
          <SidebarMenuButton asChild onClick={() => router.push(item.url)}>
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
