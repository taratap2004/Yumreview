"use client";
import RestaurantCard from '@/components/RestaurantCard';
import React from 'react';

const Pingyang: React.FC = () => {
    return (
        <div className="bg-yellow-100 min-h-screen flex flex-col items-center justify-start py-10">
            {/* รูปภาพ */}
            <img src="/ping.jpg" alt="PingYang" className="w-full h-[250px] object-cover rounded-lg  mt-0" />

            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                padding: '20px'
            }}>
                <RestaurantCard name="ชื่อร้าน 1" id={'701b9ee9-9c56-4901-b662-db71c469a2d6'} imageUrl={'https://cms.dmpcdn.com/food/2023/02/23/45f22f80-b3ac-11ed-847b-5bfda9f44996_original.jpg'} />
                <RestaurantCard name="ชื่อร้าน 2" id={'02702524-f208-43e3-9e02-94eafeb82a93'} imageUrl={'https://cms.dmpcdn.com/food/2023/02/23/45f22f80-b3ac-11ed-847b-5bfda9f44996_original.jpg'} />
                <RestaurantCard name="ชื่อร้าน 3" id={''} imageUrl={'https://cms.dmpcdn.com/food/2023/02/23/45f22f80-b3ac-11ed-847b-5bfda9f44996_original.jpg'} />
            </div>
        </div>
    );
};

export default Pingyang;
