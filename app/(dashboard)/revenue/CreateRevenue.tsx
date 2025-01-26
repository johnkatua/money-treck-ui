"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Revenue } from "@/lib/table-columns";
import React, { useState } from "react";

const CreateRevenue = () => {
  const [newRevenue, setNewRevenue] = useState({ name: "", amount: "" });

  const handleCreateRevenue = () => {
    const newRevenueItem: Revenue = {
      id: Date.now().toString(),
      name: newRevenue.name,
      amount: parseFloat(newRevenue.amount),
    };

    // setRevenueList((prev) => [...prev, newRevenueItem]);
    setNewRevenue({ name: "", amount: "" });
  };

  const periodItems = [
    {
      name: "Daily",
      value: "daily",
    },
    {
      name: "Weekly",
      value: "weekly",
    },
    {
      name: "Monthly",
      value: "monthly",
    },
    {
      name: "Yearly",
      value: "yearly",
    },
  ];
  return (
    <Card className="bg-white rounded-lg hover:shadow-lg">
      <CardHeader className="font-semibold text-2xl text-gray-800">
        Add New Revenue
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-gray-500">
              Name:
            </Label>
            <Input
              id="name"
              value={newRevenue.name}
              onChange={(e) =>
                setNewRevenue({ ...newRevenue, name: e.target.value })
              }
              placeholder="Enter revenue name"
              className="mt-2 p-3 rounded-md w-full text-gray-800 focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
          <div>
            <Label htmlFor="amount" className="text-gray-500">
              Amount:
            </Label>
            <Input
              id="amount"
              type="number"
              value={newRevenue.amount}
              onChange={(e) =>
                setNewRevenue({ ...newRevenue, amount: e.target.value })
              }
              placeholder="Enter revenue amount"
              className="mt-2 p-3 rounded-md w-full text-gray-800 focus:ring-2 focus:ring-indigo-500 transition-all"
            />
          </div>
          <div>
            <Label htmlFor="period" className="text-gray-500">
              Period:
            </Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select Period" />
              </SelectTrigger>
              <SelectContent>
                {periodItems?.map(({ name, value }) => (
                  <SelectItem key={value} value={value}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleCreateRevenue}
          className="w-full bg-green-500 hover:bg-green-600 text-white p-3 rounded-md transition-all duration-300"
        >
          Create Revenue
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CreateRevenue;
