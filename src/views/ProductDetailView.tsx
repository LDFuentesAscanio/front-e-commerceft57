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
      <div className="flex flex-col md:flex-row justify-between my-16 bg-pearl-white p-8 rounded-xl shadow-lg">
        <div className="flex justify-center md:w-1/2 h-auto mb-6 md:mb-0">
          <img
            src={image}
            alt={`${name} - Product Image - ${description}`}
            className="max-w-full h-auto rounded-lg"
          />
        </div>

        <div className="flex flex-col justify-start text-justify p-4 gap-3 md:w-1/2">
          <h1 className="text-3xl font-bold text-black-tag mb-3">{name}</h1>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-sm text-gray-700">Stock: {stock}</p>
          <p className="font-bold text-black-tag text-xl mt-2">
            Price: ${price}
          </p>

          <button
            onClick={handleAddToCart}
            className="bg-old-rose text-white w-full sm:w-52 py-2 rounded-full mt-6 hover:bg-old-rose-dark transition duration-300"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailView;
