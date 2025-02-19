export interface IRevenue {
  updatedData: Revenue[];
  total: number;
  page: number;
  limit: number;
}

export interface Revenue extends IData {
  id: number;
}

export interface IData {
  _id: string;
  name: string;
  amount: number;
  period: string;
  user_id: string;
}

export interface IRevenueRequest {
  name: string;
  amount: number;
  period: string;
}
