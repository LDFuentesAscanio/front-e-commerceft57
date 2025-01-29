import { Toast } from '@/components/Toast';
import { ILogin } from '@/Intefaces/ILogin';
import { IRegister } from '@/Intefaces/IRegister';
import axios from 'axios';

export async function Register(userData: IRegister) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users/register`,
      userData
    );

    if (response.status === 201) {
      Toast.fire({
        icon: 'success',
        title: 'Registration Successful',
      });
      return response;
    }
  } catch (error: any) {
    console.log(error);
    Toast.fire({
      icon: 'error',
      title: 'Registration Failed',
      text: error.response.data.message,
    });
    throw new Error(error);
  }
}

export async function Login(userData: ILogin) {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
      userData
    );

    console.log('Received response:', response);

    if (response.status === 200 || response.status === 201) {
      Toast.fire({
        icon: 'success',
        title: 'User logged in',
      });
      return response;
    } else {
      throw new Error(`Unexpected response status: ${response.status}`);
    }
  } catch (error: any) {
    console.error('Login error details:', error);
    Toast.fire({
      icon: 'error',
      title: 'Login Failed',
      text: error.response?.data?.message || error.message,
    });
    throw error;
  }
}
