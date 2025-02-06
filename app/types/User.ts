export interface IUser {
  name: string;
  email: string;
  password?: string;
  currency: string;
  phoneNumber: string;
  avatar?: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IToken {
  token: string;
}

export interface IUserResponse extends IUser, IToken {}

export interface ILoginResponse extends ILogin, IToken {}
