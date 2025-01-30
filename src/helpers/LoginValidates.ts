import { ILogin, ILoginError } from '@/Intefaces/ILogin';

export function validateField(values: ILogin) {
  const errors: ILoginError = {};
  const regexMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!regexMail.test(values.email)) {
    errors.email = 'The mail is not valid.';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  }

  return errors;
}
