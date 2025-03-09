import Link from 'next/link'
import React from 'react';

const Sweet: React.FC = () => {
    return (
        <div className="bg-yellow-100 min-h-screen flex flex-col items-center justify-start py-10">
            {/* รูปภาพ */}
            <img src="/bingsu.jpg" alt="Bingsu" className="w-full h-[250px] object-cover rounded-lg"
                style={{ marginTop: '-40px' }} />

            <p className="absolute top-23 left-8 text-white text-3xl font-extrabold shadow-2xl uppercase">ของหวาน</p>
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
                <Link href={`/restaurants/${'9c22003a-e5e5-4f9e-8ef4-85e8fe2f041d'}`} passHref>
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
                            <img src="dud.jpg" className="w-full h-full object-cover" />
                        </div>
                        <div style={{ width: '75%', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2 className="text-xl font-bold">ดูดนมพาณิชย์</h2>
                            <p className="text-gray-600">ข้อมูลเกี่ยวกับร้านอาหาร</p>
                        </div>
                    </div>
                </Link>

                {/* การ์ดสอง */}
                <Link href={`/restaurants/${'b63d3c1f-9e64-4783-ae9b-5dcf553e4134'}`} passHref>
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
                            <img src="tim.jpg" className="w-full h-full object-cover" />
                        </div>
                        <div style={{ width: '75%', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2 className="text-xl font-bold">ติ๋มนมสด (Tim-Nom-Sod)</h2>
                            <p className="text-gray-600">ข้อมูลเกี่ยวกับร้านอาหาร</p>
                        </div>
                    </div>
                </Link>

                {/* การ์ดสาม */}
                <Link href={`/restaurants/${'d20cae8e-9eba-4141-90bd-072b24fd06a9'}`} passHref>
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
                            <img src="tao.jpg" className="w-full h-full object-cover" />
                        </div>
                        <div style={{ width: '75%', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2 className="text-xl font-bold">น้ำเต้าหู้เงินล้าน</h2>
                            <p className="text-gray-600">ข้อมูลเกี่ยวกับร้านอาหาร</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Sweet;