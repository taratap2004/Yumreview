import React from 'react';
import Link from 'next/link';

interface RestaurantCardProps {
    id: string; // หรือ slug สำหรับใช้ใน URL
    name: string;
    imageUrl: string; // URL ของรูปภาพ
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ id, name, imageUrl }) => {
    return (
        <Link href={`/restaurants/${id}`} passHref>
            <div
                style={{
                    width: '400px',
                    height: '400px',
                    border: '1px solid #ccc',
                    margin: '80px',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                className="restaurant-card"
            >
                {/* รูปภาพ */}
                <img
                    src={imageUrl}
                    alt={name}
                    style={{
                        width: '100%',
                        height: '350px',
                        objectFit: 'cover',
                    }}
                />
                {/* ชื่อร้าน */}
                <p
                    style={{
                        textAlign: 'center',
                        fontSize: '1.2rem',
                        margin: '10px 0',
                        color: '#333',
                    }}
                >
                    {name}
                </p>
            </div>
        </Link>
    );
};

export default RestaurantCard;