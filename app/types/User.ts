export interface IUser {
  name: string;
  email: string;
  password: string;
}

export interface IToken {
  token: string;
}

export interface IUserResponse extends IUser, IToken {}
