'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabase';
import Link from 'next/link';
import {   LogIn,  LogOut,  User } from 'react-feather';



export default function Navbar() {
  const [user, setUser] = useState<{ id: string; email: string } | null>(null);
  const [showLogout, setShowLogout] = useState(false);

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
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/';
  };

  return (
    <nav className="flex justify-between items-center p-3 bg-white border-gray-200 ">
      <Link href="/">
        <div className="text-4xl font-bold text-purple-700 ">
          YumReview
        </div>
      </Link>

      <div className="flex items-center space-x-4 ">
        {/* ปุ่ม Profile */}
        {user ? (
         <div className="relative z-50">
         <button
           onClick={() => setShowLogout(!showLogout)}
           className="p-2 rounded-lg hover:bg-gray-100 transition duration-200"
         >
           <User size={24} className="text-purple-700" />
         </button>
       
         {/* เมนู Logout */}
         {showLogout && user.id && (
           <div className="fixed right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg ">
             <button
               onClick={handleLogout}
               className="block w-full text-center px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors duration-200"
             >
               <LogOut size={24} className="text-purple-700" />
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