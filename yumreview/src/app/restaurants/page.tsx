'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';


type Restaurant = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  location: string;
  opening_hours: string;
  contact: string;
  menu: { name: string; price: number }[];
  reviews: { rating: number; comment: string; user: string }[];
  avg_rating: number;
};

export default function RestaurantDetailPage({ params }: { params: { id: string } }) {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data, error } = await supabase
          .from('restaurants')
          .select('*, reviews(rating, comment, user), menu(name, price)')
          .eq('id', params.id)
          .single();

        if (error) throw error;

        // คำนวณคะแนนเฉลี่ย
        const avg_rating = data.reviews.length
          ? data.reviews.reduce((acc: number, r: { rating: number }) => acc + r.rating, 0) / data.reviews.length
          : 0;

        setRestaurant({ ...data, avg_rating });
      } catch (err) {
        setError('เกิดข้อผิดพลาดในการดึงข้อมูลร้านอาหาร');
        console.error(err);
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

      {/* รีวิวจากผู้ใช้ */}
      <h2 className="text-2xl font-bold mt-6">รีวิวจากผู้ใช้</h2>
      <div className="mt-4">
        {restaurant.reviews.map((review, index) => (
          <div key={index} className="border p-4 rounded-lg mb-4">
            <p className="text-yellow-500">⭐ {review.rating} / 5</p>
            <p className="text-gray-600">{review.comment}</p>
            <p className="text-sm text-gray-400">โดย {review.user}</p>
          </div>
        ))}
      </div>

      {/* คะแนนเฉลี่ย */}
      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <p className="text-xl font-bold">คะแนนเฉลี่ย: ⭐ {restaurant.avg_rating.toFixed(1)} / 5</p>
      </div>
    </div>
  );
}