export interface IBudget extends IBudgetResponse {
  id: number;
}

export interface IBudgetResponse {
  name: string;
  amount: number;
  period: string;
}
