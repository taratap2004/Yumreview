'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../lib/supabase';

export default function Dashboard() {
  const router = useRouter();
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error('Error fetching user:', error.message);
      } else {
        setEmail(data?.user?.email || 'No Email');
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[url('/login.jpg')] bg-cover bg-center flex items-center justify-center">
      {/* Overlay มืดลงเล็กน้อย */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Dashboard Content */}
      <div className="relative w-full max-w-lg mx-auto bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg space-y-4 text-center border border-white/40">
        <h1 className="text-3xl font-bold text-white">Dashboard</h1>
        
        {/* แสดงอีเมลของผู้ใช้ */}
        <p className="text-white">คุณเข้าสู่ระบบด้วย: <span className="font-semibold">{email}</span></p>

        <button
          onClick={() => router.push('/')}
          className="bg-blue-500/80 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
        >
          กลับไปหน้าแรก
        </button>
      </div>
    </div>
  );
}
