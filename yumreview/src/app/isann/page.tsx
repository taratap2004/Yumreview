import Link from 'next/link'
import React from 'react';

const Isann: React.FC = () => {
    return (
        <div className="bg-yellow-100 min-h-screen flex flex-col items-center justify-start py-10">
            {/* รูปภาพ */}
            <img src="/isan.jpg" alt="Isan" className="w-full h-[250px] object-cover rounded-lg"
                style={{ marginTop: '-40px' }} />

            <p className="absolute top-23 left-8 text-white text-3xl font-extrabold shadow-2xl uppercase">อิสาน</p>
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
                <Link href={`/restaurants/${'a2c2ba03-1ce5-4cb5-96cb-acfc81f3c774'}`} passHref>
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
                            <img src="som.jpg"className="w-full h-full object-cover" />
                        </div>
                        <div style={{ width: '75%', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2 className="text-xl font-bold">ส้มตำฟรุ้งฟริ้ง ซ.30กันยา</h2>
                            <p className="text-gray-600">ข้อมูลเกี่ยวกับร้านอาหาร</p>
                        </div>
                    </div>
                </Link>

                {/* การ์ดสอง */}
                <Link href={`/restaurants/${'d99f9b74-77d7-47b7-a3a4-f8c8698dfccc'}`} passHref>
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
                            <img src="lap.jpg" className="w-full h-full object-cover" />
                        </div>
                        <div style={{ width: '75%', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2 className="text-xl font-bold">ลาบนัว โคราช</h2>
                            <p className="text-gray-600">ข้อมูลเกี่ยวกับร้านอาหาร</p>
                        </div>
                    </div>
                </Link>

                {/* การ์ดสาม */}
                <Link href={`/restaurants/${'c53606d8-40ae-43e6-ac47-2da4667c1185'}`} passHref>
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
                            <img src="https://th.bing.com/th/id/OIP.4GHy7qVhAuIF8V2OLyxJcgHaHa?rs=1&pid=ImgDetMain" className="w-full h-full object-cover" />
                        </div>
                        <div style={{ width: '75%', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2 className="text-xl font-bold">ตั้งใจตำ (TungJaiTum) </h2>
                            <p className="text-gray-600">ข้อมูลเกี่ยวกับร้านอาหาร</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Isann;