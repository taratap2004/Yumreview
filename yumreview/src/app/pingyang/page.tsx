"use client";

import Link from 'next/link';
import React from 'react';

const Pingyang: React.FC = () => {
    return (
        <div className="bg-yellow-100 min-h-screen flex flex-col items-center justify-start py-10">
            {/* รูปภาพ */}
            <img src="/ping.jpg" alt="PingYang" className="w-full h-[250px] object-cover rounded-lg"
                style={{ marginTop: '-40px' }} />

            <p className="absolute top-23 left-8 text-white text-3xl font-extrabold shadow-2xl uppercase">ปิ้งย่าง</p>
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
                <Link href={`/restaurants/${'8888b3b3-8d7c-4eb5-9ff0-d2427b5d8b60'}`} passHref>
                    <div style={{
                        display: 'flex',
                        width: '70vw',
                        height: '250px',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        backgroundColor: 'white',
                        cursor: 'pointer'
                    }}>
                        <div style={{ width: '25%' }}>
                            <img src="sho.jpg" className="w-full h-full object-cover" />
                        </div>
                        <div style={{ width: '75%', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2 className="text-xl font-bold">Shounen Yakiniku 焼肉少年</h2>
                            <p className="text-gray-600">ข้อมูลเกี่ยวกับร้านอาหาร</p>
                        </div>
                    </div>
                </Link>

                {/* การ์ดสอง */}
                <Link href={`/restaurants/${'c3e3770c-1ad3-4677-9b3d-ca9b425479ec'}`} passHref>
                    <div style={{
                        display: 'flex',
                        width: '70vw',
                        height: '250px',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        backgroundColor: 'white',
                        cursor: 'pointer'
                    }}>
                        <div style={{ width: '25%' }}>
                            <img src="got.png" className="w-full h-full object-cover" />
                        </div>
                        <div style={{ width: '75%', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2 className="text-xl font-bold">GodGrilla BBQ ก็อตกริลล่า ปิ้งย่างเกาหลี</h2>
                            <p className="text-gray-600">ข้อมูลเกี่ยวกับร้านอาหาร</p>
                        </div>
                    </div>
                </Link>

                {/* การ์ดสาม */}
                <Link href={`/restaurants/${'1871e8f7-3ba2-4bb3-b7b1-8a80d7499d63'}`} passHref>
                    <div style={{
                        display: 'flex',
                        width: '70vw',
                        height: '250px',
                        borderRadius: '10px',
                        overflow: 'hidden',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        backgroundColor: 'white',
                        cursor: 'pointer'
                    }}>
                        <div style={{ width: '25%' }}>
                            <img src="pago.jpg" alt="ร้าน 3" className="w-full h-full object-cover" />
                        </div>
                        <div style={{ width: '75%', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2 className="text-xl font-bold">ป๋าโก้ หมูกระทะ&ซีฟู้ด บุฟเฟ่ต์</h2>
                            <p className="text-gray-600">ข้อมูลเกี่ยวกับร้านอาหาร</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Pingyang;