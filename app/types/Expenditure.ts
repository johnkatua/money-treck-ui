export interface IExpenditure extends IExpenditureResponse {
  id: number;
}

export interface IExpenditureResponse {
  name: string;
  amount: number;
}

export interface IExpenditureRequest {
  name: string;
  amount: number;
  budget_id: string;
}
