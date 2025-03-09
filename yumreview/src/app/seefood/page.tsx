"use client";

import React from 'react';



const Pingyang: React.FC = () => {
    return (
        <div className="bg-yellow-100 min-h-screen flex flex-col items-center justify-start py-10">
            {/* รูปภาพ */}
            <img src="/ping.jpg" alt="PingYang" className="w-full h-[250px] object-cover rounded-lg  "
                style={{ marginTop: '-40px' }} />

            <p className="absolute top-23 left-8 text-white 
            text-3xl font-extrabold   shadow-2xl uppercase" >ซีฟู้ด</p>
            <div style={{

                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '40px',
                gap: '20px',
                width: '100%'
            }}>
                {/* การ์ดแรก */}
                <div className="flex w-3/4 h-[250px]  rounded-lg shadow-lg overflow-hidden bg-white">
                    <div className="w-1/4">
                        <img src="https://cms.dmpcdn.com/food/2023/02/23/45f22f80-b3ac-11ed-847b-5bfda9f44996_original.jpg" alt="ร้าน 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-3/4 p-4 flex flex-col justify-center">
                        <h2 className="text-xl font-bold">ชื่อร้าน 1</h2>
                        <p className="text-gray-600">ข้อมูลเกี่ยวกับร้านอาหาร</p>
                    </div>
                </div>

                {/* การ์ดสอง */}
                <div className="flex w-3/4 h-[250px]  rounded-lg shadow-lg overflow-hidden bg-white">
                    <div className="w-1/4">
                        <img src="https://cms.dmpcdn.com/food/2023/02/23/45f22f80-b3ac-11ed-847b-5bfda9f44996_original.jpg" alt="ร้าน 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-3/4 p-4 flex flex-col justify-center">
                        <h2 className="text-xl font-bold">ชื่อร้าน 2</h2>
                        <p className="text-gray-600">ข้อมูลเกี่ยวกับร้านอาหาร</p>
                    </div>
                </div>

                {/* การ์ดสาม */}
                <div className="flex w-3/4 h-[250px]  rounded-lg shadow-lg overflow-hidden bg-white">
                    <div className="w-1/4">
                        <img src="https://cms.dmpcdn.com/food/2023/02/23/45f22f80-b3ac-11ed-847b-5bfda9f44996_original.jpg" alt="ร้าน 3" className="w-full h-full object-cover" />
                    </div>
                    <div className="w-3/4 p-4 flex flex-col justify-center">
                        <h2 className="text-xl font-bold">ชื่อร้าน 3</h2>
                        <p className="text-gray-600">ข้อมูลเกี่ยวกับร้านอาหาร</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Pingyang;
