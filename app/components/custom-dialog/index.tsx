import { useDialogStore } from "@/app/stores";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FC, ReactNode } from "react";

interface CustomDialogProps {
  children?: ReactNode;
  description: string;
}

const defaultDescription = `This action cannot be undone. This will permanently delete your
            Revenue and remove the data from our servers.`;

const CustomDialog: FC<CustomDialogProps> = ({
  description = defaultDescription,
  children,
}) => {
  const { isOpen } = useDialogStore();

  if (!isOpen) return null;
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolute sure?</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <div className="flex gap-4">{children}</div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
