"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../app/lib/supabase'; // ตรวจสอบให้แน่ใจว่าคุณได้ตั้งค่า Supabase client แล้ว
import Popup from './popup'; // Import the Popup component
  const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  interface Restaurant {
    id: string;
    name: string;
    location: string;
  }

  const [results, setResults] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0, width: 0 });
  const router = useRouter();

  const handleSearch = async (event: React.KeyboardEvent<HTMLInputElement> | React.MouseEvent<HTMLButtonElement>) => {
    if (!searchTerm.trim()) return;

    setIsLoading(true);
    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .ilike('name', `%${searchTerm}%`);

    setIsLoading(false);
    if (error) {
      console.error('Error searching restaurants:', error);
    } else {
      setResults(data);
      setShowPopup(true);

      // ตรวจสอบว่า event.target มีค่าและเป็น HTMLElement
      const target = event.target as HTMLElement;
      if (target && target.closest) {
        const searchContainer = target.closest('.search-container');
        if (searchContainer) {
          const rect = searchContainer.getBoundingClientRect();
          setPopupPosition({
            top: rect.bottom + window.scrollY + 10, // ตำแหน่งด้านล่างช่องค้นหา
            left: rect.left + window.scrollX, // ตำแหน่งด้านซ้ายช่องค้นหา
            width: rect.width + 10, // ความกว้างเท่ากับช่องค้นหา
          });
        }
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (!e.target.value.trim()) {
      setShowPopup(false); // ซ่อนป็อปอัพเมื่อลบข้อความ
    }
  };
  const handleRestaurantClick = (id: string) => {
    router.push(`/restaurants/${id}`);
    setShowPopup(false); // ปิดป็อปอัพเมื่อคลิกร้าน
  };

  return (
    <div>
      <div className="relative w-full h-64 overflow-hidden rounded-lg">
        <img src="/food.jpg" alt="Delicious food in Korat" className="image" />
        <div className="search-container">
          <input
            type="text"
            placeholder="search...."
            className="input"
            value={searchTerm}
            onChange={handleChange}
            onKeyPress={(e) => e.key === 'Enter' && handleSearch(e)}
          />
          <button
            className="search-button"
            onClick={(e) => handleSearch(e)}
            disabled={isLoading}
          >
            {isLoading ? 'กำลังค้นหา...' : 'ค้นหา'}
          </button>
        </div>
        <p className="text">ค้นหาร้านอาหารร้านอร่อยในโคราช เราคัดสรรมาให้คุณแล้ว</p>
      </div>

      {showPopup && (
        <Popup
          results={results}
          position={popupPosition}
          onClose={() => setShowPopup(false)}
          onRestaurantClick={handleRestaurantClick}
        />
      )}

      <style jsx>{`
        .image {
          width: 100%;
          height: 250px;
          object-fit: cover;
          border-radius: 15px;
        }

        .search-container {
          display: flex;
          align-items: center;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
        }

        .input {
          padding: 10px;
          width: 450px;
          border: 2px solid white;
          border-radius: 25px;
          outline: none;
          margin-top: -10px;
          color: black;
          background-color: white;
          box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
        }

        .search-button {
          padding: 10px 20px;
          width: auto;
          background-color: #3399ff;
          color: white;
          border: none;
          border-radius: 25px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          margin-top: -10px;
          margin-left: 10px;
        }

        .search-button:hover {
          background-color: #0056b3;
        }

        .search-button:disabled {
          background-color: #ccc;
          cursor: not-allowed;
        }

        .text {
          position: absolute;
          top: 65%;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
          font-family: 'Nunito', sans-serif;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);
          z-index: 2;
          padding: 6px 12px;
          border-radius: 8px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .search-container {
            width: 90%;
          }
          .input {
            width: 70%;
          }
          .search-button {
            padding: 10px 15px;
          }
          .text {
            font-size: 1rem;
            top: 60%;
          }
        }
      `}</style>
    </div>
  );
};

export default SearchBar;