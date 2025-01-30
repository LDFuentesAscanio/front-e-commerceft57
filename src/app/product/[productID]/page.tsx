import { getProductsById } from '@/helpers/products.helper';
import ProductDetailView from '@/views/ProductDetailView';

const ProductDetail = async ({ params }: { params: { productID: string } }) => {
  const product = await getProductsById(params.productID);
  return (
    <div>
      <ProductDetailView {...product} />
    </div>
  );
};

export default ProductDetail;
