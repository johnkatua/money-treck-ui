export interface IExpenditure extends IExpenditureResponse {
  id: number;
}

export interface IExpenditureResponse {
  _id: string;
  name: string;
  amount: number;
  budget_id: string;
}

export interface IExpenditureRequest {
  name: string;
  amount: number;
  budget_id: string;
}
