"use client";
import React from 'react';

const SearchBar: React.FC = () => {
  return (
    <div>
      <div className="container" >
        <img src="/food.jpg" alt="Delicious food in Korat" className="image" />
        <div className="search-container ">
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
         height: 250px;
         object-fit: cover;
         border-radius: 15px; /* ปรับขอบมน */
       }

        .search-container {
         display:flex;
         align-items: center;
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
        width: 450px;
        border: 1px solid #ccc;
        border-radius: 25px; /* ทำให้ช่องป้อนข้อมูลโค้งมน */
        outline: none;
        margin-top: -10px;
        }

        .search-button {
        
        padding: 10px 20px;
         width: auto;
        background-color: #3399FF;
        color: white;
        border: none;
        border-radius: 25px; /* ทำให้ปุ่มโค้งมน */
        cursor: pointer;
        transition: background-color 0.3s ease;
        margin-top: -10px;
}
        .search-button:hover {
          background-color: #0056b3; /* เปลี่ยนสีเมื่อโฮเวอร์ */
        }
        .text {
        position: absolute;
        top: 55%;
        left: 50%;
        transform: translateX(-50%);
        color: white;
        font-size: 1.25rem; /* ลดขนาดลงเล็กน้อย */
       font-weight: 600; /* ทำให้ไม่หนามากเกินไป */
       font-family: "Nunito", sans-serif; /* ใช้ฟอนต์ที่ดูดี */
       text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3); /* เงาเบาลง */
       z-index: 2;
       padding: 6px 12px; /* ลด padding ให้ขนาดกระชับขึ้น */
       border-radius: 8px; /* ทำให้ขอบมนขึ้นแต่ไม่มากไป */
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