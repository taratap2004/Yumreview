'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../lib/supabase';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    const { error } = await supabase.auth.signUp({ email, password, options: { data: { name } } });
    if (error) {
      alert(error.message);
    } else {
      router.push('/login');
    }
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <h2 className="text-2xl font-bold">Register</h2>
      <input type="text" placeholder="Name" className="border p-2 my-2" onChange={(e) => setName(e.target.value)} />
      <input type="email" placeholder="Email" className="border p-2 my-2" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" className="border p-2 my-2" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister} className="bg-green-500 text-white px-4 py-2 mt-2">Register</button>
      <button onClick={() => router.push('/login')} className="bg-blue-500 text-white px-4 py-2 mt-2">Login</button>
    </div>
  );
}
