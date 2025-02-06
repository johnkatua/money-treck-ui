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
import React from "react";

const CustomSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant={"outline"}>Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetDescription>
            Make sure to close the sheet after you are done with it.
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
      <div>
        <p className="text-center">Sheet Content</p>
      </div>
      <SheetFooter>
        <Button variant={"default"}>Close Sheet</Button>
      </SheetFooter>
    </Sheet>
  );
};

export default CustomSheet;
