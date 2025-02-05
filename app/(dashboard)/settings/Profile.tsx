import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const Profile = () => {
  return (
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
  );
};

export default Profile;
