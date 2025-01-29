import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { Toast } from './Toast';

export const LogoutButton: React.FC = () => {
  const { setUserData } = useAuth();
  const router = useRouter();

  const handleLogout = () => {
    setUserData(null);
    Cookies.remove('userData');
    localStorage.removeItem('userSession');
    router.push('/login');
    Toast.fire({
      icon: 'success',
      title: 'You have been logged out',
    });
  };

  return (
    <button
      onClick={handleLogout}
      className="w-24 bg-old-rose text-pearl-white py-2 rounded-md hover:bg-black-tag transition-colors"
    >
      Log out
    </button>
  );
};
