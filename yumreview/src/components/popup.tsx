import React from 'react';
import ReactDOM from 'react-dom';

interface PopupProps {
  results: { id: string; name: string; location: string }[];
  position: { top: number; left: number };
  onClose: () => void;
  onRestaurantClick: (id: string) => void;
}

const Popup: React.FC<PopupProps> = ({ results, position, onRestaurantClick }) => {
  return ReactDOM.createPortal(
    <div
      className="popup"
      style={{
        position: 'absolute',
        top: position.top,
        left: position.left,
        width: '450px', // กำหนดความกว้างให้เท่ากับช่องค้นหา
        backgroundColor: 'white', // พื้นหลังสีขาว
        borderRadius: '10px', // ทำให้ขอบมน
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // เพิ่มเงา
        zIndex: 1000, // ให้ป็อปอัพแสดงอยู่ด้านบน
      }}
    >
      <div className="popup-content">
        {results.length > 0 ? (
          results.map((restaurant) => (
            <div
              key={restaurant.id}
              className="restaurant-card"
              onClick={() => onRestaurantClick(restaurant.id)}
            >
              <h3>{restaurant.name}</h3>
              <p>{restaurant.location}</p>
            </div>
          ))
        ) : (
          <p className="no-results">ไม่พบร้านอาหารที่คุณค้นหา</p>
        )}
      </div>
    </div>,
    document.body // แสดงป็อปอัพที่ body
  );
};

export default Popup;