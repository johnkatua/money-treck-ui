import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { FC, ReactNode } from "react";

interface CustomDropdownMenuItemProps {
  color: string;
  children: ReactNode;
}

const CustomDropdownMenuItem: FC<CustomDropdownMenuItemProps> = ({
  color,
  children,
}) => {
  return <DropdownMenuItem style={{ color }}>{children}</DropdownMenuItem>;
};

export default CustomDropdownMenuItem;
