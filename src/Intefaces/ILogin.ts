export interface ILogin {
  email: string;
  password: string;
}

export interface ILoginError {
  email?: string;
  password?: string;
}
