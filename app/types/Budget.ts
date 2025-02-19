export interface IBudgetMetadata {
  updatedData: IBudget[];
  total: number;
  page: number;
  limit: number;
}

export interface IBudget extends IBudgetResponse {
  id: number;
}

export interface IBudgetResponse {
  _id: string;
  name: string;
  amount: number;
  period: string;
}
