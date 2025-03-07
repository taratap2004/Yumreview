'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';
import { useParams } from 'next/navigation';

type Restaurant = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  location: string;
  opening_hours: string;
  contact: string;
};

export default function RestaurantDetailPage() {
  const params = useParams();
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
          .select('*')
          .eq('id', params.id)
          .single();

        if (error) throw error;

        setRestaurant(data as Restaurant);
      } catch (err) {
        setError('เกิดข้อผิดพลาดในการดึงข้อมูลร้านอาหาร');
        console.error('Error:', err);
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
    <div className="restaurant-detail">
      <h1 style={{ fontSize: '2rem' }}>{restaurant.name}</h1>
      <img src={restaurant.image_url} alt={restaurant.name} className="w-full h-64 object-cover rounded-lg" />
      <div className="mt-4">
        <p><img src="/description-icon.png" alt="Description Icon" className="w-4 h-4 inline-block mr-2"></img> {restaurant.description}</p>
        <p><img src="/description-icon.png" alt="Description Icon" className="w-4 h-4 inline-block mr-2"></img> {restaurant.description}</p>
        <p><img src="/description-icon.png" alt="Description Icon" className="w-4 h-4 inline-block mr-2"></img> {restaurant.description}</p>
        <p><strong>ที่ตั้ง:</strong> {restaurant.location}</p>
        <p><strong>เวลาเปิด-ปิด:</strong> {restaurant.opening_hours}</p>
        <p><strong>ติดต่อ:</strong> {restaurant.contact}</p>
      </div>
    </div>
  );  
}