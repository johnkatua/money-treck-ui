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
import Image from "next/image";

const Profile = () => {
  const { data, isError, error } = useUser();

  if (isError && data && data?.length < 0)
    return <div>Error: {error.message}</div>;

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-4">
          <CardTitle className="w-[50%] text-4xl font-medium">
            {"Profile"}
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
          <div className="w-[25%] h-[400px] shadow-md rounded-md hover:shadow-lg bg-slate-200">
            <Image
              src={data?.avatar || "/images/avatar.jpg"}
              alt="profile"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-[400px] object-cover rounded-md"
              priority
            />
          </div>
          <div className="w-[75%] shadow-md rounded-md p-4 hover:shadow-lg">
            <ul className="space-y-4">
              <li>
                <span className="font-semibold">Name:</span> {data?.name}
              </li>
              <li>
                <span className="font-semibold">Email:</span> {data?.email}
              </li>
              <li>
                <span className="font-semibold">Currency:</span>{" "}
                {data?.currency || "KSH"}
              </li>
              <li>
                <span className="font-semibold">Phone Number:</span>{" "}
                {data?.phoneNumber || "N/A"}
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;
