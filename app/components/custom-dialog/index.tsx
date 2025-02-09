import { DialogFooter, DialogHeader } from "@/components/ui/dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@radix-ui/react-dialog";
import { FC } from "react";
import CustomButton from "../buttons/CustomButton";
import { useDialogStore } from "@/app/stores";

interface CustomDialogProps {
  open: boolean;
  handleClose: () => void;
}

const CustomDialog: FC<CustomDialogProps> = () => {
  const { isOpen, openDialog, closeDialog } = useDialogStore();

  if (!isOpen) return null;
  return (
    <Dialog open={isOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolute sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <button onClick={closeDialog}>Close</button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
