'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavBarSub: React.FC = () => {
  const pathname = usePathname();

  return (
    <div>
      <nav className="bg-gradient-to-r from-old-rose to-pearl-white text-black-tag p-2 pr-3 flex justify-between items-center">
        <div className="flex gap-4">
          <Link
            href="/dashboard"
            className={
              pathname === '/dashboard'
                ? 'text-green-tent cursor-default'
                : 'hover:text-green-tent'
            }
          >
            Dashboard
          </Link>
          <Link
            href="/dashboard/orders"
            className={
              pathname === '/dashboard/orders'
                ? 'text-green-tent cursor-default'
                : 'hover:text-green-tent'
            }
          >
            Orders
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBarSub;
