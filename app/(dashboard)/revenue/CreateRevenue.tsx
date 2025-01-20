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
  return (
    <Card>
      <CardHeader className="font-semibold text-2xl">
        Add New Revenue
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <Label htmlFor="name" className="text-white">
              Name:
            </Label>
            <Input
              id="name"
              value={newRevenue.name}
              onChange={(e) =>
                setNewRevenue({ ...newRevenue, name: e.target.value })
              }
              placeholder="Enter revenue name"
              className="mt-2 p-3 rounded-md w-full text-gray-800"
            />
          </div>
          <div>
            <Label htmlFor="amount" className="text-white">
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
              className="mt-2 p-3 rounded-md w-full text-gray-800"
            />
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
