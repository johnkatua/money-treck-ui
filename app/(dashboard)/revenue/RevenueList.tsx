import TableWrapper from "@/app/components/table-wrapper";
import { Revenue, revenueColumns } from "@/lib/table-columns";

const revenueData: Revenue[] = [
  { id: "1", name: "Product A", amount: 12345 },
  { id: "2", name: "Product B", amount: 67890 },
  { id: "3", name: "Product C", amount: 23456 },
  { id: "4", name: "Product D", amount: 78901 },
  { id: "5", name: "Product E", amount: 34567 },
  { id: "6", name: "Product F", amount: 89012 },
  { id: "7", name: "Product G", amount: 45678 },
  { id: "8", name: "Product H", amount: 90123 },
  { id: "9", name: "Product I", amount: 56789 },
  { id: "10", name: "Product J", amount: 12345 },
];

const RevenueList = () => {
  return <TableWrapper data={revenueData} columns={revenueColumns} />;
};

export default RevenueList;
