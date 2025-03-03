'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      alert(error.message);
    } else {
      router.push('/restaurants');
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold">Login</h2>
      <input type="email" placeholder="Email" className="border p-2 my-2" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="border p-2 my-2" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin} className="bg-blue-500 text-white px-4 py-2 mt-2">Login</button>
      <link onClick={() => router.push('/register')} className="bg-green-500 text-white px-4 py-2 mt-2">Register</link>
    </div>
  );
}
