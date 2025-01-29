'use client';
import { useAuth } from '@/context/AuthContext';
import { getOrders } from '@/helpers/order.helper';
import { IOrder } from '@/Intefaces/IOrder';
import { useEffect, useState } from 'react';

const OrdersView: React.FC = () => {
  const { userData } = useAuth();
  const [orders, setOrders] = useState<IOrder[]>([]);

  const handleGetOrders = async () => {
    const response = await getOrders(userData?.token!);
    setOrders(response);
  };

  useEffect(() => {
    handleGetOrders();
  }, []);

  return (
    <div className="flex flex-col items-center bg-pearl-white p-8 min-h-screen">
      <div className="w-full max-w-3xl bg-green-tent p-6 rounded-lg shadow-lg">
        {orders.length > 0 ? (
          orders.map((order: IOrder) => (
            <div
              key={order.id}
              className="mb-6 p-4 border rounded-md bg-white shadow"
            >
              <h2 className="text-xl font-semibold text-old-rose mb-2">
                Order Status: {order.status.toLocaleUpperCase()}
              </h2>
              <p className="text-gray-600">Order N°: {order.id}</p>
              <p className="text-gray-600">
                Date: {new Date(order.date).toLocaleDateString()}
              </p>
              <div className="mt-4">
                {order.products.map((product) => (
                  <div
                    key={product.id}
                    className="mb-3 p-3 border-b border-gray-200 flex justify-between"
                  >
                    <p className="text-lg font-bold">{product.name}</p>
                    <p className="text-gray-700">${product.price}</p>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-xl text-gray-500">No orders</p>
        )}
      </div>
    </div>
  );
};

export default OrdersView;
