'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../app/lib/supabase';
import Link from 'next/link';
import { LogIn, LogOut, User } from 'react-feather';

export default function Navbar() {
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  const [showLogout, setShowLogout] = useState(false);

  // ตรวจสอบสถานะผู้ใช้เมื่อโหลดหน้าเว็บ
  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user && user.email) {
        setUser({ id: user.id, email: user.email });
      } else {
        setUser(null);
      }
    };

    fetchUser();

    // ตรวจจับการเปลี่ยนแปลงสถานะการเข้าสู่ระบบ
    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        setUser({ id: session.user.id, email: session.user.email || '' });
      } else {
        setUser(null);
      }
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null); // ลบข้อมูลผู้ใช้หลังจากออกจากระบบ
    setShowLogout(false); // ซ่อนเมนู Logout
    window.location.href = '/'; // นำทางไปยังหน้าแรก
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
      <Link href="/">
        <div className="text-4xl font-extrabold bg-gradient-to-r from-red-900 to-amber-700 text-transparent bg-clip-text">
          YumReview
        </div>
      </Link>

      <div className="flex items-center space-x-4">
        {user ? (
          <div className="relative">
            <button
              onClick={() => setShowLogout(!showLogout)}
              className="p-2 rounded-lg hover:bg-gray-100 transition duration-200 cursor-pointer"
            >
              <User size={24} className="text-purple-700" />
            </button>

            {/* เมนู Logout */}
            {showLogout && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-[99]">
                <div className="px-4 py-3 border-b border-gray-200">
                  <p className="text-sm font-medium text-gray-800">{user.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    <LogOut size={16} className="text-purple-700" />
                    <span>Log Out</span>
                  </div>
                </button>
              </div>
            )}
          </div>
        ) : (
          <Link href="/login">
            <div className="p-2 rounded-lg hover:bg-gray-100 transition duration-200">
              <LogIn size={24} className="text-purple-700" />
            </div>
          </Link>
        )}
      </div>
    </nav>
  );
}