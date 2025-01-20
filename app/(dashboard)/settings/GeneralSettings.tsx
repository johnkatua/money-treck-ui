import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const GeneralSettings = () => {
  return (
    <div className="grid grid-cols-1 gap-8">
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
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
