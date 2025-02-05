import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const GeneralSettings = () => {
  return (
    <div className="grid grid-cols-1 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="w-[25%] bg-slate-400">A</div>
            <div className="w-[75%] bg-slate-400">B</div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Themes</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default GeneralSettings;
