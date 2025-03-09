'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const CategoryButtons: React.FC = () => {
    const router = useRouter();
    const categories = ['ปิ้งย่าง', 'ชาบู', 'ซีฟู้ด', 'อีสาน', 'ของหวาน'];
    const handleCategoryClick = (category: string) => {
        if (category === 'ปิ้งย่าง') {
            router.push('/pingyang');
        } else if (category === 'ชาบู') {
            router.push('/chabu');
        } else if (category === 'ซีฟู้ด') {
            router.push('/seefood');
        } else if (category === 'อีสาน') {
            router.push('/isann');
        } else if (category === 'ของหวาน') {
            router.push('/sweets');
        }

    };


    return (
        <div className="flex justify-center items-center flex-wrap p-4">
            {categories.map((category) => (
                <button
                    key={category}
                    className="category-button"
                    onClick={() => handleCategoryClick(category)}
                >
                    {category}
                </button>
            ))}
            <style jsx>{`
         .category-button {
                    background-color: white;
                    color: #000000; /* ใช้สีเทอควอยซ์สำหรับตัวหนังสือ */
                    font-family: 'Poppins', sans-serif; /* ใช้ฟอนต์ Poppins */
                    font-size: 1.1rem; /* ขนาดฟอนต์ */
                    font-weight: 700; /* ทำให้ฟอนต์ไม่หนามากเกินไป */
                    padding: 12px 24px;
                    border-radius: 30px; /* ปรับให้ปุ่มมนๆ */
                    margin: 30px; /* ระยะห่างระหว่างปุ่ม */
                    border: none; ; 
                    cursor: pointer;
                    transition: background-color 0.3s ease, transform 0.3s ease; /* เพิ่มการเปลี่ยนสีและการขยายเมื่อกด */
                }

                .category-button:hover {
                    opacity: 0.7; /* ทำให้ปุ่มโปร่งแสงเมื่อ hover */
                    transform: scale(1.05); /* ขยายปุ่มเล็กน้อย */
                    box-shadow: 0 4px 8px rgba(52, 152, 219, 0.3); /* เพิ่มเงาเล็กน้อยเมื่อ hover */
                }
      `}</style>
        </div>
    );
};

export default CategoryButtons;
