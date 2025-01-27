export interface Revenue {
  data: {
    data: IData[];
  };
}

export interface IData {
  name: string;
  amount: number;
  period: string;
  user_id: string;
}
