"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import { FC, ReactNode } from "react";
import CustomSheet from "../custom-sheet";

interface ICustomDropDown {
  id?: string | number | null | undefined;
  children: ReactNode;
}

const CustomDropDown: FC<ICustomDropDown> = ({ id, children }) => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <MoreHorizontal />
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="start" className="">
          {children}
        </DropdownMenuContent>
      </DropdownMenu>
      {/* <CustomSheet id={id}>{children}</CustomSheet> */}
    </>
  );
};

export default CustomDropDown;
