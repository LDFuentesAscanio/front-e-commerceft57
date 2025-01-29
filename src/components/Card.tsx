import { IProduct } from '@/Intefaces/IProduct';
import Image from 'next/image';

const Card: React.FC<IProduct> = ({ name, price, image }) => {
  return (
    <div className="p-4 w-72 m-1 shadow-custom bg-white rounded-lg">
      <h2 className="font-bold text-xl text-center">{name}</h2>
      <div className="relative w-full h-40">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-lg"
          priority
        />
      </div>
      <div className="border border-old-rose rounded-lg text-center text-black-tag mt-2 p-2">
        <p>
          <strong className="font-bold text-xl">Price:</strong> ${price}
        </p>
      </div>
    </div>
  );
};

export default Card;
