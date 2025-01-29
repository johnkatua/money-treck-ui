export interface IExpenditure extends IExpenditureResponse {
  id: number;
}

export interface IExpenditureResponse {
  name: string;
  amount: number;
}
