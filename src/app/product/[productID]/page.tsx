import { getProductsById } from '@/helpers/products.helper';
import ProductDetailView from '@/views/ProductDetailView';

const ProductDetail: React.FC<{ params: { productID: string } }> = async ({
  params,
}) => {
  const { productID } = await params;
  const product = await getProductsById(productID);
  return (
    <div>
      <ProductDetailView {...product} />
    </div>
  );
};

export default ProductDetail;
