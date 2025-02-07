import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { FC, ReactNode } from "react";

interface ICustomDropDown {
  children: ReactNode;
}

const CustomDropDown: FC<ICustomDropDown> = ({ children }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <MoreHorizontal />
      </DropdownMenuTrigger>
      <DropdownMenuContent side="right" align="start" className="">
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomDropDown;
