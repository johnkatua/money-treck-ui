import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { FC } from "react";

interface ICustomButton {
  text: string;
  type: "submit" | "reset";
  disabled: boolean;
}

const CustomButton: FC<ICustomButton> = ({ text, type, disabled }) => {
  return (
    <Button type={type} disabled={disabled}>
      <Loader2 className="animate-spin" />
      {text}
    </Button>
  );
};

export default CustomButton;
