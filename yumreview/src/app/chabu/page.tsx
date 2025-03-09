import Link from 'next/link'
import React from 'react';

const Chabu: React.FC = () => {
    return (
        <div className="bg-yellow-100 min-h-screen flex flex-col items-center justify-start py-10">
            {/* รูปภาพ */}
            <img src="/shabu.jpg" alt="Shabu" className="w-full h-[250px] object-cover rounded-lg"
                style={{ marginTop: '-40px' }} />

            <p className="absolute top-23 left-8 text-white text-3xl font-extrabold shadow-2xl uppercase">ชาบู</p>
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
                            <img src="https://cms.dmpcdn.com/food/2023/02/23/45f22f80-b3ac-11ed-847b-5bfda9f44996_original.jpg" className="w-full h-full object-cover" />
                        </div>
                        <div style={{ width: '75%', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2 className="text-xl font-bold">ชิวเล้า</h2>
                            <p className="text-gray-600">ข้อมูลเกี่ยวกับร้านอาหาร</p>
                        </div>
                    </div>
                </Link>

                {/* การ์ดสอง */}
                <Link href={`/restaurants/${'050845ca-eeb3-4206-b336-f361d760350b'}`} passHref>
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
                            <img src="https://cms.dmpcdn.com/food/2023/02/23/45f22f80-b3ac-11ed-847b-5bfda9f44996_original.jpg" className="w-full h-full object-cover" />
                        </div>
                        <div style={{ width: '75%', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2 className="text-xl font-bold">Nikusen Shabu</h2>
                            <p className="text-gray-600">ข้อมูลเกี่ยวกับร้านอาหาร</p>
                        </div>
                    </div>
                </Link>

                {/* การ์ดสาม */}
                <Link href={`/restaurants/${'54092ee1-3098-4753-a8ae-f795e6dba852'}`} passHref>
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
                            <img src="https://cms.dmpcdn.com/food/2023/02/23/45f22f80-b3ac-11ed-847b-5bfda9f44996_original.jpg" className="w-full h-full object-cover" />
                        </div>
                        <div style={{ width: '75%', padding: '16px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                            <h2 className="text-xl font-bold">Kin s The Buta</h2>
                            <p className="text-gray-600">ข้อมูลเกี่ยวกับร้านอาหาร</p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Chabu;