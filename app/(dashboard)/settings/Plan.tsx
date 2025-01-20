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
    <div className="grid grid-cols-3 gap-4">
      <div className="p-1">
        <div className="h-8" />
        <Card className="text-gray-800">
          <CardHeader>
            <CardTitle>Monthly Description</CardTitle>
            <CardDescription>For Trial Purposes</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col items-center text-4xl">Ksh. 200</div>
            <Button disabled className="w-full">
              Current Plan
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2">
            <span className="font-semibold">Features</span>
            <ul>
              <li>Name</li>
              <li>One</li>
              <li>Name</li>
              <li>Two</li>
              <li>Thee</li>
            </ul>
          </CardFooter>
        </Card>
      </div>
      <div className="bg-yellow-100 p-1 rounded-lg">
        <div className="h-8">Most Popular</div>
        <Card className="text-gray-800">
          <CardHeader>
            <CardTitle>Quartely Subscription</CardTitle>
            <CardDescription>As you familiarize with the app</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 mt-4">
            <div className="flex flex-col items-center text-4xl">Ksh. 500</div>
            <Button className="w-full">Get Started</Button>
          </CardContent>
          <CardFooter className="flex flex-col items-start gap-2">
            <span className="font-semibold">Features</span>
            <ul>
              <li>Name</li>
              <li>One</li>
              <li>Name</li>
              <li>Two</li>
              <li>Thee</li>
            </ul>
          </CardFooter>
        </Card>
      </div>
      <div className="bg-yellow-100">Card 3</div>
    </div>
  );
};

export default Plan;
