export interface FinancialOverview {
  totalRevenue: number;
  totalExpenses: number;
  netProfit: number;
}

export interface BudgetUtilizationData {
  _id: string;
  name: string;
  totalBudget: number;
  totalExpenses: number;
  utilizationRate: number;
}

export interface BudgetUtilization {
  data: BudgetUtilizationData[];
}
