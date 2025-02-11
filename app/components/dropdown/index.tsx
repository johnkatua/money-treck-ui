import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { FC, ReactNode } from "react";

interface ICustomDropDown {
  id?: string | number | null | undefined;
  children: ReactNode;
}

const CustomDropDown: FC<ICustomDropDown> = ({ id, children }) => {
  return (
    <>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger>
          <MoreHorizontal />
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="start" className="">
          {children}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default CustomDropDown;
