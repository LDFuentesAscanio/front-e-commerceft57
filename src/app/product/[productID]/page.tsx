import { getProductsById } from '@/helpers/products.helper';
import ProductDetailView from '@/views/ProductDetailView';

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ productID: string }>;
}) {
  const { productID } = await params;
  const product = await getProductsById(productID);
  return (
    <div>
      <ProductDetailView {...product} />
    </div>
  );
}
