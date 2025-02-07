import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { FC, ReactNode } from "react";

interface CustomDropdownMenuItemProps {
  color: string;
  children: ReactNode;
  text: string;
  handleSelect: () => void;
}

const CustomDropdownMenuItem: FC<CustomDropdownMenuItemProps> = ({
  color,
  children,
  text,
  handleSelect,
}) => {
  return (
    <DropdownMenuItem
      style={{ color }}
      className="flex items-center gap-2 px-4 py-2 cursor-pointer transition-all duration-300 rounded-md"
      onClick={handleSelect}
    >
      {children}
      <span className="font-medium">{text}</span>
    </DropdownMenuItem>
  );
};

export default CustomDropdownMenuItem;
