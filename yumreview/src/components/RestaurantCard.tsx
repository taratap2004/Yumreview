import React from 'react';

interface RestaurantCardProps {
    name: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ name }) => {
    return (
        <div style={{ width: '200px', height: '200px', border: '1px solid #ccc', margin: '10px' }}>
            <div style={{ width: '100%', height: '150px', backgroundColor: '#eee' }}></div>
            <p>{name}</p>
        </div>
    );
};

export default RestaurantCard;