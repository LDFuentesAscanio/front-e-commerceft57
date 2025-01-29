'use client';
import Link from 'next/link';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateField } from '@/helpers/LoginValidates';
import { Login } from '@/helpers/auth.helper';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export const LoginView: React.FC = () => {
  const { setUserData } = useAuth();
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-tr from-teal-dark to-green-dark">
      <div className="bg-green-tent p-8 rounded-xl shadow-md w-full max-w-sm">
        <Formik
          initialValues={{ email: '', password: '' }}
          validate={validateField}
          onSubmit={async (values, { setSubmitting }) => {
            console.log('Submitting form with values:', values);
            setSubmitting(true);
            try {
              const response = await Login(values);
              setUserData({
                token: response.data.token,
                user: response.data.user,
              });
              Cookies.set(
                'userData',
                JSON.stringify({
                  token: response.data.token,
                  user: response.data.user,
                })
              );
              router.push('/');
            } catch (error) {
              console.error('Login failed:', error);
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6">
              <h1 className="text-4xl font-bold text-center text-black-tag">
                Login
              </h1>
              <hr className="border-t-2 border-old-rose mb-6" />

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="font-semibold text-black-tag">
                  Email
                </label>
                <Field
                  type="email"
                  name="email"
                  className="p-2 border rounded"
                  placeholder="Enter your email"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="password"
                  className="font-semibold text-black-tag"
                >
                  Password
                </label>
                <Field
                  type="password"
                  name="password"
                  className="p-2 border rounded"
                  placeholder="Enter your password"
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 mt-4 bg-old-rose text-white font-bold rounded-lg hover:bg-black-tag focus:ring-4 focus:ring-black-tag"
              >
                Submit
              </button>

              <Link
                href="/register"
                className="text-sm text-center text-black-tag hover:text-gold-elegant"
              >
                Do not have an account? Register here.
              </Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginView;
