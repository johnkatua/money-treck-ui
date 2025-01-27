export interface Revenue extends IData {
  id: number;
}

export interface IData {
  name: string;
  amount: number;
  period: string;
  user_id: string;
}
