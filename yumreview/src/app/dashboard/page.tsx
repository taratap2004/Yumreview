'use client';

import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="w-full max-w-lg mx-auto bg-white p-6 rounded-2xl shadow-md space-y-4 text-center">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Welcome to Yumreview!</p>

      <button
        onClick={() => router.push('/')}
        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        กลับไปหน้าแรก
      </button>
    </div>
  );
}
