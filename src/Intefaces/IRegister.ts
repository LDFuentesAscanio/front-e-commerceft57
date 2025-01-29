export interface IRegister {
  email: string;
  password: string;
  name: string;
  address: string;
  phone: string;
}

export interface IRegisterErrors {
  email?: string;
  password?: string;
  name?: string;
  address?: string;
  phone?: string;
}
