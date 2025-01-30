import { getProductsDB } from '@/helpers/products.helper';
import Card from './Card';
import Link from 'next/link';

const CardList: React.FC = async () => {
  const productsPreload = await getProductsDB();
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
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
