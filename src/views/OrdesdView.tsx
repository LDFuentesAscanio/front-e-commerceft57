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
      <div className="w-full max-w-4xl bg-green-tent p-6 rounded-xl shadow-lg">
        {orders.length > 0 ? (
          orders.map((order: IOrder) => (
            <div
              key={order.id}
              className="mb-6 p-6 border rounded-lg bg-white shadow-md hover:shadow-xl transition-shadow duration-200"
            >
              <h2 className="text-xl font-semibold text-old-rose mb-2">
                Order Status: {order.status.toLocaleUpperCase()}
              </h2>
              <p className="text-gray-600 text-sm mb-2">Order N°: {order.id}</p>
              <p className="text-gray-600 text-sm mb-4">
                Date: {new Date(order.date).toLocaleDateString()}
              </p>
              <div className="space-y-4">
                {order.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex justify-between items-center border-b py-3"
                  >
                    <p className="text-lg font-medium">{product.name}</p>
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
