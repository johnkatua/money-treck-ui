import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FC, ReactNode } from "react";

interface ICustomSelect {
  placeholder: string;
  children: ReactNode;
  onValueChange: (e: any) => void;
}

const CustomSelect: FC<ICustomSelect> = ({
  placeholder,
  onValueChange,
  children,
}) => {
  return (
    <Select onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </Select>
  );
};

export default CustomSelect;
