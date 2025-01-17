import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarProvider,
} from "@/components/ui/sidebar";
import { sidebarData } from "@/lib/data";
import SidebarUser from "./SidebarUser";

const { user } = sidebarData;

const CustomSidebar = () => {
  return (
    <SidebarProvider open={true}>
      <Sidebar
        collapsible="icon"
        className="bg-[--theme-color-one] text-white w-[300px] border-none"
      >
        <SidebarHeader className="bg-[--theme-color-one] h-[80px]">
          Header
        </SidebarHeader>
        <SidebarContent className="bg-[--theme-color-one]">
          Hello
        </SidebarContent>
        <SidebarFooter className="bg-[--theme-color-one]">
          <SidebarUser user={user} />
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
};

export default CustomSidebar;
