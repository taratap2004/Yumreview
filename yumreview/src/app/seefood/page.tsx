import Link from 'next/link'
import React from 'react';

const Seefood: React.FC = () => {
    return (
        <div className="bg-yellow-100 min-h-screen flex flex-col items-center justify-start py-10">
            {/* รูปภาพ */}
            <img src="/ping.jpg" alt="PingYang" className="w-full h-[250px] object-cover rounded-lg"
                style={{ marginTop: '-40px' }} />

            <p className="absolute top-23 left-8 text-white text-3xl font-extrabold shadow-2xl uppercase">ซีฟู้ด</p>
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
                <Link href={`/restaurants/${'02702524-f208-43e3-9e02-94eafeb82a93'}`} passHref>
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
                            <img src="https://cms.dmpcdn.com/food/2023/02/23/45f22f80-b3ac-11ed-847b-5bfda9f44996_original.jpg" alt="ร้าน 1" className="w-full h-full object-cover" />
                        </div>
                        <div style={{ width: '75%', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2 className="text-xl font-bold">ชื่อร้าน 1</h2>
                            <p className="text-gray-600">ข้อมูลเกี่ยวกับร้านอาหาร</p>
                        </div>
                    </div>
                </Link>

                {/* การ์ดสอง */}
                <Link href={`/restaurants/${'id2'}`} passHref>
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
                            <img src="https://cms.dmpcdn.com/food/2023/02/23/45f22f80-b3ac-11ed-847b-5bfda9f44996_original.jpg" alt="ร้าน 2" className="w-full h-full object-cover" />
                        </div>
                        <div style={{ width: '75%', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2 className="text-xl font-bold">ชื่อร้าน 2</h2>
                            <p className="text-gray-600">ข้อมูลเกี่ยวกับร้านอาหาร</p>
                        </div>
                    </div>
                </Link>

                {/* การ์ดสาม */}
                <Link href={`/restaurants/${'id3'}`} passHref>
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
                            <img src="https://cms.dmpcdn.com/food/2023/02/23/45f22f80-b3ac-11ed-847b-5bfda9f44996_original.jpg" alt="ร้าน 3" className="w-full h-full object-cover" />
                        </div>
                        <div style={{ width: '75%', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2 className="text-xl font-bold">ชื่อร้าน 3</h2>
                            <p className="text-gray-600">ข้อมูลเกี่ยวกับร้านอาหาร</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Seefood;