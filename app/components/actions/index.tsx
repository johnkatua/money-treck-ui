import { Edit, Trash } from "lucide-react";
import { FC } from "react";
import CustomDropDown from "../dropdown";
import CustomDropdownMenuItem from "../dropdown/dropdown-menu-item";

interface CustomActionsProps {
  handleEdit: () => void;
  handleDelete: () => void;
}

const CustomActions: FC<CustomActionsProps> = ({
  handleEdit,
  handleDelete,
}) => {
  return (
    <CustomDropDown>
      <CustomDropdownMenuItem
        color="blue"
        text="Edit Revenue"
        handleClick={handleEdit}
      >
        <Edit size={16} />
      </CustomDropdownMenuItem>
      <CustomDropdownMenuItem
        color="red"
        text="Delete Revenue"
        handleClick={handleDelete}
      >
        <Trash size={16} />
      </CustomDropdownMenuItem>
    </CustomDropDown>
  );
};

export default CustomActions;
