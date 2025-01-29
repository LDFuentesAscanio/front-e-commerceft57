'use client';
import { LogoutButton } from '@/components/LogoutButton';
import { useAuth } from '@/context/AuthContext';

const ProfileView: React.FC = () => {
  const { userData } = useAuth();

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-[-1]"
      >
        <source src="/Profile.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md bg-opacity-70 bg-green-tent p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-semibold text-old-rose mb-4">
            Welcome {userData?.user.name}
          </h1>
          <div className="text-black-tag space-y-2 mb-4">
            <p className="text-lg">
              Your shipping address is: {userData?.user.address}
            </p>
            <p className="text-lg">
              Your contact number is: {userData?.user.phone}
            </p>
            <p className="text-lg">Your email is: {userData?.user.email}</p>
          </div>
          <LogoutButton />
        </div>
      </div>
    </div>
  );
};

export default ProfileView;
