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
                    width: '350px',
                    height: '400px',
                    border: '1px solid #ccc',
                    borderRadius: '10px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    margin: '10px', // เพิ่มระยะห่างระหว่างการ์ด
                }}
                className="restaurant-card"
            >
                {/* รูปภาพ */}
                <img
                    src={imageUrl}
                    alt={name}
                    style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover',
                    }}
                />
                <p
                    style={{
                        textAlign: 'center',
                        fontSize: '1.2rem',
                        padding: '10px',
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