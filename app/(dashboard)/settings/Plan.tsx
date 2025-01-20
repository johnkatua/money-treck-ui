import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";

const Plan = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
      {/* Monthly Plan */}
      <div className="p-1">
        <div className="h-8" />
        <Card className="bg-gradient-to-b from-indigo-50 to-indigo-100 text-gray-800 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Monthly Plan</CardTitle>
            <CardDescription className="text-sm text-gray-600">
              Perfect for testing and short-term goals.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4 mt-4">
            <div className="text-5xl font-extrabold text-indigo-600">
              Ksh. 200
            </div>
            <Button disabled className="w-full bg-indigo-400 text-white">
              Current Plan
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2">
            <span className="font-semibold text-gray-700">Key Features:</span>
            <ul className="list-disc list-inside text-gray-600">
              <li>Access to basic features</li>
              <li>Single user support</li>
              <li>1 GB cloud storage</li>
              <li>Email notifications</li>
            </ul>
          </CardFooter>
        </Card>
      </div>

      {/* Quarterly Plan */}
      <div className="p-1 bg-gradient-to-b from-gray-700 to-black rounded-xl">
        <div className="h-8 flex items-center justify-center text-white font-semibold">
          Most Popular
        </div>
        <Card className="bg-white text-gray-800 shadow-lg">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Quarterly Plan</CardTitle>
            <CardDescription className="text-sm text-gray-600">
              Ideal for steady progress and exploration.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4 mt-4">
            <div className="text-5xl font-extrabold text-gray-900">
              Ksh. 500
            </div>
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
              Get Started
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2">
            <span className="font-semibold text-gray-700">Key Features:</span>
            <ul className="list-disc list-inside text-gray-600">
              <li>Priority support</li>
              <li>5 GB cloud storage</li>
              <li>Team collaboration tools</li>
              <li>Customizable notifications</li>
            </ul>
          </CardFooter>
        </Card>
      </div>

      {/* Yearly Plan */}
      <div className="p-2">
        <div className="h-8" />
        <Card className="bg-gradient-to-b from-green-50 to-green-100 text-gray-800 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg font-bold">Yearly Plan</CardTitle>
            <CardDescription className="text-sm text-gray-600">
              Best value for long-term productivity.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center gap-4 mt-4">
            <div className="text-5xl font-extrabold text-green-600">
              Ksh. 2000
            </div>
            <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
              Get Started
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2">
            <span className="font-semibold text-gray-700">Key Features:</span>
            <ul className="list-disc list-inside text-gray-600">
              <li>Full access to all features</li>
              <li>20 GB cloud storage</li>
              <li>Advanced analytics</li>
              <li>Dedicated account manager</li>
            </ul>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Plan;
