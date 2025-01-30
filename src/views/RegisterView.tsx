'use client';
import Link from 'next/link';
import { IRegister, IRegisterErrors } from '@/Intefaces/IRegister';
import { useState } from 'react';
import { RegisterValidate } from '@/helpers/RegisterValidates';
import RegisterConfig from '@/Config/RegisterConfig';
import { useRouter } from 'next/navigation';
import FormInput from '../components/FormInput';
import { Register } from '@/helpers/auth.helper';

export const RegisterView: React.FC = () => {
  const initialForm: IRegister = {
    name: '',
    email: '',
    password: '',
    address: '',
    phone: '',
  };

  const router = useRouter();

  const [form, setForm] = useState<IRegister>(initialForm);

  const [errors, setErrors] = useState<IRegisterErrors>(initialForm);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const { name, value } = event.target;
    setForm((prevState: IRegister) => ({
      ...prevState,
      [name]: value,
    }));
    const error = RegisterValidate(name, value, form);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await Register(form);

      if (response && response.status === 201) {
        setTimeout(() => {
          router.replace('/Login');
        }, 2000);
      }
    } catch (error) {
      console.error('Error in registration', error);
    }
  };

  return (
    <div className="p-4 min-h-screen bg-pearl-white flex items-center justify-center">
      <div className="w-full max-w-md sm:max-w-lg bg-green-tent p-8 rounded-lg shadow-lg">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h2 className="text-2xl sm:text-3xl font-semibold text-gold-elegant text-center">
            Register Form
          </h2>
          <hr className="border-t-2 border-old-rose" />
          {RegisterConfig.map(({ name, label, type, placeholder }) => (
            <div key={name} className="flex flex-col gap-2">
              <FormInput
                key={name}
                name={name}
                label={label}
                type={type}
                value={form[name as keyof typeof form]}
                onChange={handleChange}
                placeholder={placeholder}
                errorMessage={errors[name as keyof typeof errors]}
              />
            </div>
          ))}
          <button
            type="submit"
            className="w-full bg-old-rose text-teal-dark font-semibold py-2 rounded-md hover:bg-pale-orange transition-colors"
          >
            Register
          </button>
          <Link
            href="/login"
            className="block text-center text-pale-orange hover:underline"
          >
            Already have an account? Login here
          </Link>
        </form>
      </div>
    </div>
  );
};

export default RegisterView;
