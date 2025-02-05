"use client";

import { useUser } from "@/app/hooks/useUser";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Pencil } from "lucide-react";
import React from "react";

const Profile = () => {
  const { data, isError, error, isLoading } = useUser();
  console.log(data);

  if (isError && data && data?.length < 0)
    return <div>Error: {error.message}</div>;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="w-[50%] text-4xl font-medium">
            My Profile
          </CardTitle>
          <CardDescription>
            <span className="bg-gray-800 rounded-md w-8 h-8 text-white flex items-center justify-center cursor-pointer hover:bg-gray-950">
              <Pencil size={18} />
            </span>
          </CardDescription>
        </div>
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
