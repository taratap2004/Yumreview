"use client";
import React from 'react';

const SearchBar: React.FC = () => {
    return (
        <div>
            <div className="container">
                <img src="/food.jpg" alt="Delicious food in Korat" className="image" />
                <div className="search-container">
                    <input type="text" placeholder="search...." className="input" />
                    <button className="search-button">ค้นหา</button>
                </div>
                <p className="text">ตามหาร้านอร่อยในโคราช เราคัดสรรมาให้คุณแล้ว</p>
            </div>
            <style jsx>{`
        .container {
          position: relative;
          background-color: lightyellow;
        }
        .image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .search-container {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          z-index: 2;
        }
        .input {
          padding: 10px;
          width: 300px;
          border: 1px solid #ccc;
          border-radius: 5px 0 0 5px; /* ปรับขอบด้านซ้าย */
          outline: none;
        }
        .search-button {
          padding: 10px 20px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 0 5px 5px 0; /* ปรับขอบด้านขวา */
          cursor: pointer;
          transition: background-color 0.3s ease;
        }
        .search-button:hover {
          background-color: #0056b3; /* เปลี่ยนสีเมื่อโฮเวอร์ */
        }
        .text {
          position: absolute;
          top: 65%;
          left: 50%;
          transform: translateX(-50%);
          color: white;
          font-size: 1.2rem;
          z-index: 2;
          padding: 5px 10px;
          border-radius: 5px;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .search-container {
            width: 90%; /* ปรับความกว้างสำหรับหน้าจอเล็ก */
          }
          .input {
            width: 70%; /* ปรับขนาดช่องค้นหาสำหรับหน้าจอเล็ก */
          }
          .search-button {
            padding: 10px 15px; /* ปรับขนาดปุ่มสำหรับหน้าจอเล็ก */
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