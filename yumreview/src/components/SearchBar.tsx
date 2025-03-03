"use client";
import React from 'react';

const SearchBar: React.FC = () => {
    return (
        <div>
            <div className="container">
                <img src="/food.jpg" alt="Background" className="image" />
                <input type="text" placeholder="search...." className="input" />
                <p className="text">ตามหาร้านอร่อยในโคราช เราคัดสรรมาให้คุณแล้ว</p>
            </div>
            <style jsx>{`
        .container {
          background-color: lightyellow;
          position: relative;
        }
        .image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        .input {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 10px;
          width: 300px;
        }
        .text {
          position: absolute;
          top: 70%;
          left: 50%;
          transform: translateX(-50%);
          color: white;
        }
      `}</style>
        </div>
    );
};

export default SearchBar;