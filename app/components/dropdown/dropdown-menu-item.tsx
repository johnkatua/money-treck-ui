import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { FC, ReactNode } from "react";

interface CustomDropdownMenuItemProps {
  color: string;
  children: ReactNode;
  text: string;
  handleClick?: () => void;
}

const CustomDropdownMenuItem: FC<CustomDropdownMenuItemProps> = ({
  color,
  children,
  text,
  handleClick,
}) => {
  return (
    <>
      <DropdownMenuItem
        style={{ color }}
        className="flex items-center gap-2 px-4 py-2 cursor-pointer transition-all duration-300 rounded-md"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleClick && handleClick();
        }}
      >
        {children}
        <span className="font-medium">{text}</span>
      </DropdownMenuItem>
    </>
  );
};

export default CustomDropdownMenuItem;
