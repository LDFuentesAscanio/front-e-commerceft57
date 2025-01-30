import Card from '@/components/Card';
import { getProductsByCategoryId } from '@/helpers/products.helper';
import Link from 'next/link';

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoryID: string }>;
}) {
  const { categoryID } = await params;
  const products = await getProductsByCategoryId(categoryID);

  const videoSrc =
    parseInt(categoryID) % 2 === 0 ? '/Products.mp4' : '/Products2.mp4';

  return (
    <div className="px-4 sm:px-6 lg:px-8">
      {/* Video Responsivo */}
      <div className="w-full max-w-full md:max-w-xl mx-auto my-8 rounded-lg overflow-hidden">
        <video className="w-full h-auto" autoPlay muted loop playsInline>
          <source src={videoSrc} type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
      </div>

      {/* Grid de productos */}
      <div className="max-w-7xl mx-auto mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
