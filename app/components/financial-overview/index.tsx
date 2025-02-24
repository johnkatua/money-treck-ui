"use client";

import { useGetFinancialOverview } from "@/app/hooks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FinancialOverview = () => {
  const { data } = useGetFinancialOverview();
  const objKeys = Object.keys(data || {});
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Financial Overview</h2>
      <section className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 mb-4">
        {objKeys?.map((key) => (
          <Card key={key}>
            <CardHeader>
              <CardTitle>{key}</CardTitle>
            </CardHeader>
            <CardContent>{data[key]}</CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default FinancialOverview;
