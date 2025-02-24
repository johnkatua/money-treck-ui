"use client";

import { useGetFinancialOverview } from "@/app/hooks";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface FinancialOverviewInterface {
  totalRevenue: number;
  totalExpenses: number;
  netProfit: number;
}

const FinancialOverview = () => {
  const { data, isLoading } = useGetFinancialOverview();

  if (!data || isLoading) return <LoadingSkeleton />;

  const objKeys = Object.keys(data || {}) as Array<
    keyof FinancialOverviewInterface
  >;

  return (
    <Card className="shadow-lg border border-gray-700 bg-gray-900 text-gray-300 rounded-md p-6">
      <CardHeader>
        <CardTitle className="text-xl font-semibold tracking-wide text-white">
          Financial Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4">
          {objKeys.map((key) => (
            <div
              key={key}
              className="p-4 rounded-md bg-gray-800 border border-gray-600 shadow-sm"
            >
              <h3 className="text-sm font-medium uppercase tracking-wide text-gray-400">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </h3>
              <p className="text-lg font-semibold text-white">
                {data[key].toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default FinancialOverview;

const LoadingSkeleton = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold">Financial Overview</h2>
      <section className="grid grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-4 mb-4">
        {Array(3)
          .fill(null)
          .map((_, index) => (
            <div
              key={index}
              className="p-4 bg-gray-200 rounded-lg animate-pulse h-24"
            ></div>
          ))}
      </section>
    </div>
  );
};
