import { useSheet } from "@/app/stores";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { FC, ReactNode } from "react";
import CustomSheet from "../custom-sheet";

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
  const switchSheetState = useSheet((state) => state.switchSheetState);
  return (
    <>
      <DropdownMenuItem
        style={{ color }}
        className="flex items-center gap-2 px-4 py-2 cursor-pointer transition-all duration-300 rounded-md"
        onClick={(e) => {
          e.stopPropagation();
          switchSheetState(true);
          handleClick && handleClick();
        }}
      >
        {children}
        <span className="font-medium" onClick={() => switchSheetState(true)}>
          {text}
        </span>
      </DropdownMenuItem>
    </>
  );
};

export default CustomDropdownMenuItem;
