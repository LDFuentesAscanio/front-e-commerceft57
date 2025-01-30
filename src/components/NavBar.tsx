'use client';
import { useAuth } from '@/context/AuthContext';
import Link from 'next/link';
import { LogoutButton } from './LogoutButton';
import categoriesToPreload from '@/helpers/categoriesToPreload';

const NavBar: React.FC = () => {
  const { userData } = useAuth();

  return (
    <div>
      <nav className="bg-gradient-to-r from-green-tent to-black-tag text-white p-2 pr-3 flex flex-col sm:flex-row justify-between items-center sm:space-x-4 space-y-4 sm:space-y-0">
        <Link href="/">
          <div className="flex items-center gap-4 ml-3">
            <img
              src="/assets/LogoC.svg"
              alt="Logo"
              className="w-8 h-8 sm:w-10 sm:h-10 p-0"
            />
            <h1 className="text-xl font-bold">I-Shop</h1>
          </div>
        </Link>
        <div className="flex flex-wrap justify-center sm:justify-start sm:space-x-4 space-y-4 sm:space-y-0">
          {categoriesToPreload &&
            categoriesToPreload.map((category) => (
              <Link
                key={category.id}
                href={`/products/${category.id}`}
                className="hover:text-old-rose ml-4"
              >
                {category.name}
              </Link>
            ))}
        </div>
        {userData?.token ? (
          <div className="flex gap-4 items-center">
            <Link
              href="/dashboard"
              className="px-4 py-2 bg-transparent border border-green-tent text-green-tent rounded-lg hover:bg-green-tent hover:text-black transition"
            >
              Profile
            </Link>
            <Link
              href="/cart"
              className="px-4 py-2 bg-transparent border border-green-tent text-green-tent rounded-lg hover:bg-green-tent hover:text-black transition"
            >
              Cart
            </Link>
            <LogoutButton />
          </div>
        ) : (
          <div className="flex gap-4 items-center">
            <Link
              href="/register"
              className="px-4 py-2 bg-transparent border border-green-tent text-green-tent rounded-lg hover:bg-green-tent hover:text-black transition"
            >
              Sign In
            </Link>
            <Link
              href="/login"
              className="px-4 py-2 bg-transparent border border-green-tent text-green-tent rounded-lg hover:bg-green-tent hover:text-black transition"
            >
              Login
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default NavBar;
