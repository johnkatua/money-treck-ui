export interface IUser extends IToken {
  name: string;
  email: string;
  password: string;
}

export interface IToken {
  token: string;
}
