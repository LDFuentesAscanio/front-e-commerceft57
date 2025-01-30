'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBarSub: React.FC = () => {
  const pathname = usePathname();

  return (
    <div>
      <nav className="bg-gradient-to-r from-old-rose to-pearl-white text-black-tag p-2 pr-3 flex flex-col sm:flex-row justify-between items-center sm:space-x-6 space-y-4 sm:space-y-0">
        <div className="flex gap-4 sm:gap-6 flex-wrap justify-center sm:justify-start w-full">
          <Link
            href="/dashboard"
            className={`
              ${
                pathname === '/dashboard'
                  ? 'text-green-tent cursor-default'
                  : 'hover:text-green-tent'
              }
              transition-all duration-300 ease-in-out
            `}
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/orders"
            className={`
              ${
                pathname === '/dashboard/orders'
                  ? 'text-green-tent cursor-default'
                  : 'hover:text-green-tent'
              }
              transition-all duration-300 ease-in-out
            `}
          >
            Orders
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBarSub;
