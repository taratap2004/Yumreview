import React from 'react';
import Link from 'next/link';

interface RestaurantCardProps {
    id: string; // หรือ slug สำหรับใช้ใน URL
    name: string;
    imageUrl: string; // URL ของรูปภาพ
    location?: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ id, name, imageUrl }) => {
    return (
        <Link href={`/restaurants/${id}`} passHref>
            <div className="restaurant-card">
                <img
                    src={imageUrl}
                    alt={name}
                    style={{
                        width: '100%',
                        height: '300px',
                        objectFit: 'cover',
                        borderRadius: '10px 10px  0 0',
                    }}
                />
                <p
                    style={{
                        backgroundColor: 'white',
                        textAlign: 'center',
                        fontSize: '1.2rem',
                        padding: '10px',
                        color: '#333',
                        fontWeight: 'bold',
                        borderRadius: '0 0 10px 10px',
                    }}
                >
                    {name}
                </p>

            </div>
        </Link>
    );
};


export default RestaurantCard;