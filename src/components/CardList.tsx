import { getProductsDB } from '@/helpers/products.helper';
import Card from './Card';
import Link from 'next/link';

const CardList: React.FC = async () => {
  const productsPreload = await getProductsDB();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 max-w-7xl mx-auto">
      {productsPreload &&
        productsPreload.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            className="block"
          >
            <Card {...product} />
          </Link>
        ))}
    </div>
  );
};

export default CardList;
