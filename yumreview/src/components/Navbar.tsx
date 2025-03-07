'use client';

import Link from 'next/link';
import { Home, LogIn } from 'react-feather';

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-4 bg-white shadow-lg rounded-lg">
        <div className="text-xl ">YumReview</div>
        <div className="flex items-center space-x-4">
          <Link href="/">
            <Home size={24} className="text-gray-800 hover:text-gray-600 transition-colors duration-300" />
          </Link>
          <Link href="/login">
            <LogIn size={24} className="text-gray-800 hover:text-gray-600 transition-colors duration-300" />
          </Link>
        </div>
      </nav>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@500;600&display=swap');
      `}</style>

      <style jsx>{`
        nav {
          padding-top: 10px;
          padding-bottom: 15px;
        }

         .text-xl {
         text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
          font-size: 1.75rem; /* ขยายขนาดฟอนต์ */
          font-weight: 600; /* ทำให้ฟอนต์หนาขึ้น */
          letter-spacing: 1px; /* เพิ่มระยะห่างระหว่างตัวอักษร */
          line-height: 1.5; /* เพิ่มระยะห่างบรรทัดเพื่อให้ดูโปร่ง */
          font-family: 'Poppins', sans-serif; /* ใช้ฟอนต์ Poppins */
        }
      `}</style>
    </>
  );
};

export default Navbar;
