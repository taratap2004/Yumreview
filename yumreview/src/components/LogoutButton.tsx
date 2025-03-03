'use client';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2">
      Logout
    </button>
  );
}
