import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FC, ReactNode } from "react";

interface CustomSheetProps {
  customBtn: ReactNode;
}

const CustomSheet: FC<CustomSheetProps> = ({ customBtn }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        {customBtn}
        {/* <Button variant={"outline"}>Open Sheet</Button> */}
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            Make sure to close the sheet after you are done with it.
          </SheetDescription>
        </SheetHeader>
        <div>
          <p className="text-center">Sheet Content</p>
        </div>
        <SheetFooter>
          <Button variant={"default"}>Close Sheet</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default CustomSheet;
