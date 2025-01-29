'use client';
import { Toast } from '@/components/Toast';
import { useAuth } from '@/context/AuthContext';
import { IProduct } from '@/Intefaces/IProduct';

export const ProductDetailView: React.FC<IProduct> = ({
  name,
  id,
  description,
  price,
  stock,
  image,
  categoryId,
}) => {
  const { userData } = useAuth();
  const handleAddToCart = () => {
    if (!userData?.token) {
      Toast.fire({
        icon: 'error',
        title: 'You need to be logged in to add to cart',
      });
    } else {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const productExists = cart.some((item: IProduct) => {
        if (item.id === id) return true;
        return false;
      });
      if (productExists) {
        Toast.fire({
          icon: 'error',
          title: 'Product already in cart',
        });
      } else {
        cart.push({
          name,
          id,
          description,
          price,
          stock,
          image,
          categoryId,
        });
        localStorage.setItem('cart', JSON.stringify(cart));

        Toast.fire({
          icon: 'success',
          title: 'Product added to cart',
        });
      }
    }
  };
  return (
    <div className="bg-[url('/assets/fondo.svg')] bg-cover bg-center h-full w-auto p-3">
      <div className="flex justify-between my-16 bg-pearl-white p-8">
        <div className="flex w-full h-auto">
          <img src={image} alt={`${name} - Product Image - ${description}`} />
        </div>
        <div className="flex flex-col justify-items-start text-justify p-4 gap-3 h-80 pr-3">
          <h1 className="text-3xl font-bold text-black-tag">{name}</h1>
          <p>{description}</p>
          <p>Stock: {stock}</p>
          <p className="font-bold text-black-tag">Price: {price}</p>
          <button
            onClick={handleAddToCart}
            className="bg-old-rose text-white w-52 p-2 rounded-full"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
