import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";
import Profile from "./Profile";

const GeneralSettings = () => {
  return (
    <div className="grid grid-cols-1 gap-8">
      <Profile />
      <Card>
        <CardHeader>
          <CardTitle>Themes</CardTitle>
        </CardHeader>
      </Card>
    </div>
  );
};

export default GeneralSettings;
