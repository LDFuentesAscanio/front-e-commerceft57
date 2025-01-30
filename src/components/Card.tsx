import { IProduct } from '@/Intefaces/IProduct';
import Image from 'next/image';

const Card: React.FC<IProduct> = ({ name, price, image }) => {
  return (
    <div className="p-4 w-full sm:w-72 md:w-80 lg:w-96 m-1 shadow-custom bg-white rounded-lg flex flex-col items-center">
      <h2 className="font-bold text-lg sm:text-xl text-center">{name}</h2>

      <div className="relative w-full h-40 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={300}
          height={160}
          className="object-cover w-full h-full"
          priority
        />
      </div>

      <div className="border border-old-rose rounded-lg text-center text-black-tag mt-3 p-3 w-full">
        <p className="text-sm sm:text-base">
          <strong className="font-bold text-lg">Price:</strong> ${price}
        </p>
      </div>
    </div>
  );
};

export default Card;
