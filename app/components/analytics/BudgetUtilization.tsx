// "use client";

// import { useBudgetUtilization } from "@/app/hooks";
// import { budgetUtilizationColumns } from "@/lib/table-columns";
// import TableWrapper from "../table-wrapper";

// const BudgetUtilization = () => {
//   const { data, isLoading } = useBudgetUtilization();
//   return (
//     <>
//       <h2 className="text-xl font-semibold tracking-wide mt-8">
//         Budget Utilization
//       </h2>
//       <TableWrapper
//         data={data}
//         columns={budgetUtilizationColumns}
//         isLoading={isLoading}
//       />
//     </>
//   );
// };

// export default BudgetUtilization;

"use client";

import { useBudgetUtilization } from "@/app/hooks";
import { budgetUtilizationColumns } from "@/lib/table-columns";
import TableWrapper from "../table-wrapper";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const BudgetUtilization = () => {
  const { data, isLoading } = useBudgetUtilization();

  return (
    <Card className="shadow-md rounded-md overflow-hidden bg-gray-100">
      <CardHeader>
        <CardTitle className="text-lg font-semibold tracking-wide">
          Budget Utilization
        </CardTitle>
      </CardHeader>
      <CardContent>
        <TableWrapper
          data={data}
          columns={budgetUtilizationColumns}
          isLoading={isLoading}
        />
      </CardContent>
    </Card>
  );
};

export default BudgetUtilization;
