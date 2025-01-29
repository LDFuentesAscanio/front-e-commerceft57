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
  } else if (values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters long.';
  } else if (
    !/[A-Z]/.test(values.password) ||
    !/[a-z]/.test(values.password) ||
    !/[0-9]/.test(values.password) ||
    !/[^A-Za-z0-9]/.test(values.password)
  ) {
    errors.password =
      'Password must include uppercase, lowercase, number, and special character.';
  }

  return errors;
}
