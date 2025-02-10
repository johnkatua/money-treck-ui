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
  value?: string;
}

const CustomSelect: FC<ICustomSelect> = ({
  placeholder,
  onValueChange,
  value,
  children,
}) => {
  return (
    <Select onValueChange={onValueChange} value={value}>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </Select>
  );
};

export default CustomSelect;
