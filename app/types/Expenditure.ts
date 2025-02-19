export interface IExpenditureMetadata {
  updatedData: IExpenditure[];
  total: number;
  page: number;
  limit: number;
}

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
