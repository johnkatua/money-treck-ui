import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { FC } from "react";

interface ICustomButton {
  text: string;
  type: "submit" | "reset";
  disabled: boolean;
  className?: string;
}

const CustomButton: FC<ICustomButton> = ({
  text,
  type,
  disabled,
  className,
}) => {
  return (
    <Button type={type} disabled={disabled} className={className}>
      {disabled && <Loader2 className="animate-spin" />}
      {text}
    </Button>
  );
};

export default CustomButton;
