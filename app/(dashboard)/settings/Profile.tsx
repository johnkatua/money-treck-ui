"use client";

import CustomSheet from "@/app/components/custom-sheet";
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

  const userProfile = [
    {
      name: data?.name || "N/A",
    },
    {
      email: data?.email || "N/A",
    },
    {
      currency: data?.currency || "KSH",
    },
    {
      phoneNumber: data?.phoneNumber || "N/A",
    },
  ];

  if (isError && data && data?.length < 0)
    return <div>Error: {error.message}</div>;

  return (
    <Card className="shadow-lg rounded-xl overflow-hidden bg-white border border-gray-200">
      <CardHeader className="bg-gradient-to-r from-gray-800 to-gray-700 p-6">
        <div className="flex items-center justify-between">
          <CardTitle className="text-3xl font-semibold text-white">
            Profile
          </CardTitle>
          <CardDescription>
            <CustomSheet
              customBtn={
                <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 transition">
                  <Pencil size={18} className="text-gray-700" />
                </button>
              }
            />
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="p-6 flex gap-6">
        <div className="w-1/3 h-64 rounded-lg overflow-hidden shadow-md border border-gray-300">
          <Image
            src={data?.avatar || "/images/avatar.jpg"}
            alt="Profile"
            width={256}
            height={256}
            className="w-full h-full object-contain"
            priority
          />
        </div>
        <div className="w-2/3 bg-gray-50 p-6 rounded-lg shadow-md border border-gray-200">
          <ul className="space-y-4 text-gray-700">
            {userProfile.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="font-semibold text-gray-900">
                  {Object.keys(item)[0]}:
                </span>{" "}
                {Object.values(item)[0]}
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default Profile;
