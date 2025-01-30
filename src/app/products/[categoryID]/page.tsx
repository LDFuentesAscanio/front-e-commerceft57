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
      <div className="flex flex-col md:flex-row items-start gap-6">
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products &&
            products.map((product) => (
              <Link key={product.id} href={`/product/${product.id}`} passHref>
                <Card {...product} />
              </Link>
            ))}
        </div>

        <div className="w-full md:w-1/3 p-8">
          <video
            className="w-full h-auto rounded-lg shadow-lg"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={videoSrc} type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
        </div>
      </div>
    </div>
  );
}
