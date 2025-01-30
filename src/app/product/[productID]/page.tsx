import { getProductsById } from '@/helpers/products.helper';
import ProductDetailView from '@/views/ProductDetailView';

interface PageProps {
  params: {
    productID: string;
  };
}

const ProductDetail: React.FC<PageProps> = async ({
  params,
}: {
  params: { productID: string };
}) => {
  const product = await getProductsById(params.productID);
  return (
    <div>
      <ProductDetailView {...product} />
    </div>
  );
};

export default ProductDetail;
