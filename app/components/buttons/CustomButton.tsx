import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { FC, ReactNode } from "react";

interface ICustomButton {
  text: string | ReactNode;
  type: "submit" | "reset";
  disabled: boolean;
  className?: string;
  onClick?: () => void;
}

const CustomButton: FC<ICustomButton> = ({
  text,
  type,
  disabled,
  className,
  onClick,
}) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClick}
    >
      {disabled && <Loader2 className="animate-spin" />}
      {text}
    </Button>
  );
};

export default CustomButton;
