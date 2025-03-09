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
        width:'550px', // กำหนดความกว้างให้เท่ากับช่องค้นหา
        backgroundColor: 'white', // พื้นหลังสีขาว
        borderRadius: '10px', // ทำให้ขอบมน
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
              style={{
                padding: '10px',
                cursor: 'pointer',
              }}
            >
              <h3 style={{ margin: 0 }}>{restaurant.name}</h3>
              <p style={{ margin: 0, color: '#666' }}>{restaurant.location}</p>
            </div>
          ))
        ) : (
          <p className="no-results" style={{ padding: '10px', textAlign: 'center'  }}>
            ไม่พบร้านอาหารที่คุณค้นหา
          </p>
        )}
      </div>
    </div>,
    document.body // แสดงป็อปอัพที่ body
  );
};

export default Popup;