'use client';
import { useAuth } from '@/context/AuthContext';
import { createOrder } from '@/helpers/order.helper';
import { IProduct } from '@/Intefaces/IProduct';
import { useEffect, useState } from 'react';

const CartView: React.FC = () => {
  const { userData } = useAuth();
  const [cart, setCart] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const StoredCart = JSON.parse(localStorage.getItem('cart') || '[]');
    if (StoredCart) {
      let totalCart = 0;
      StoredCart.map((product: IProduct) => {
        totalCart += product.price;
      });
      setTotal(totalCart);
      setCart(StoredCart);
    }
  }, []);

  const handleCheckout = async () => {
    const idProducts = cart?.map((product) => product.id);
    await createOrder(userData?.token!, idProducts);
    localStorage.setItem('cart', '[]');
    setCart([]);
    setTotal(0);
  };
  return (
    <div className="flex flex-col bg-pearl-white p-8 min-h-screen items-center">
      <div className="w-full max-w-3xl bg-green-tent p-6 rounded-lg shadow-lg">
        {cart.length > 0 ? (
          cart.map((product: IProduct) => (
            <div
              key={product.id}
              className="mb-4 p-4 border rounded-md bg-white shadow"
            >
              <p className="text-lg font-bold">{product.name}</p>
              <p className="text-gray-700">Price: ${product.price}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-xl text-gray-500">
            Your cart is empty
          </p>
        )}
        <div className="mt-6 text-right">
          <p className="text-xl font-semibold">Total: ${total}</p>
          <button
            onClick={handleCheckout}
            className="mt-4 bg-old-rose text-white font-bold py-2 px-4 rounded hover:bg-black-tag transition"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartView;
