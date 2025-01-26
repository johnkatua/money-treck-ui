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
}

const CustomSelect: FC<ICustomSelect> = ({ placeholder, children }) => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>{children}</SelectContent>
    </Select>
  );
};

export default CustomSelect;
