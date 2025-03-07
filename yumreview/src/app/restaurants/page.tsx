'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';

// กำหนดประเภทข้อมูล
type Restaurant = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  location: string;
  opening_hours: string;
  contact: string;
  menu: { name: string; price: number }[];
};

type RestaurantDetailPageProps = {
  params: {
    id: string;
  };
};

export default function RestaurantDetailPage({ params }: RestaurantDetailPageProps) {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      setLoading(true);
      setError(null);

      try {
        console.log('Fetching restaurant with ID:', params.id); // ตรวจสอบ ID

        const { data, error } = await supabase
          .from('restaurants')
          .select('*, menu(name, price)') // ลบ reviews ออก
          .eq('id', params.id)
          .single();

        if (error) {
          console.error('Supabase error:', error); // แสดงข้อผิดพลาดจาก Supabase
          throw error;
        }

        console.log('Fetched data:', data); // ตรวจสอบข้อมูลที่ได้รับ
        setRestaurant(data as Restaurant);
      } catch (err) {
        setError('เกิดข้อผิดพลาดในการดึงข้อมูลร้านอาหาร');
        console.error('Error:', err); // แสดงข้อผิดพลาดทั้งหมด
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurant();
  }, [params.id]);

  if (loading) return <p>กำลังโหลด...</p>;
  if (error) return <p>{error}</p>;
  if (!restaurant) return <p>ไม่พบข้อมูลร้านอาหาร</p>;

  return (
    <div className="p-6">
      {/* รูปภาพร้านอาหาร */}
      <img src={restaurant.image_url} alt={restaurant.name} className="w-full h-64 object-cover rounded-lg" />

      {/* รายละเอียดร้าน */}
      <h1 className="text-3xl font-bold mt-4">{restaurant.name}</h1>
      <p className="text-gray-600 mt-2">{restaurant.description}</p>
      <div className="mt-4">
        <p><strong>ที่ตั้ง:</strong> {restaurant.location}</p>
        <p><strong>เวลาเปิด-ปิด:</strong> {restaurant.opening_hours}</p>
        <p><strong>ติดต่อ:</strong> {restaurant.contact}</p>
      </div>

      {/* เมนูแนะนำ */}
      <h2 className="text-2xl font-bold mt-6">เมนูแนะนำ</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        {restaurant.menu.map((item, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-gray-600">{item.price} บาท</p>
          </div>
        ))}
      </div>
    </div>
  );
}  