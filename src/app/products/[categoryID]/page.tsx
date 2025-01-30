import Card from '@/components/Card';
import { getProductsByCategoryId } from '@/helpers/products.helper';
import Link from 'next/link';

export async function CategoryPage({
  params,
}: {
  params: Promise<{ categoryID: string }>;
}) {
  const { categoryID } = await params;
  const products = await getProductsByCategoryId(categoryID);

  const videoSrc =
    parseInt(categoryID) % 2 === 0 ? '/Products.mp4' : '/products2.mp4';

  return (
    <div>
      <div className="w-full max-w-xl mx-auto my-8 rounded-lg overflow-hidden">
        <video className="w-full h-auto" autoPlay muted loop playsInline>
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>

      <div className="max-w-7xl mx-auto space-y-8 mt-4">
        {products &&
          products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`} passHref>
              <Card key={product.id} {...product} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default CategoryPage;
