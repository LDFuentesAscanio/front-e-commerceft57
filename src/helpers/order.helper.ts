import { Toast } from '@/components/Toast';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function createOrder(token: string, products: number[]) {
  try {
    const response = await fetch(`${API_URL}/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify({ products }),
    });
    Toast.fire({
      icon: 'success',
      title: 'Product buyed successfully',
    });
    return response.json();
  } catch (error: any) {
    Toast.fire({
      icon: 'error',
      title: 'An error occurred',
    });
    throw new Error(error);
  }
}

export async function getOrders(token: string) {
  try {
    const response = await fetch(`${API_URL}/users/orders`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    return response.json();
  } catch (error: any) {
    Toast.fire({
      icon: 'error',
      title: 'An error occurred',
    });
    throw new Error(error);
  }
}
