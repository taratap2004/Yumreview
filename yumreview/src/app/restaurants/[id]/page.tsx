'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../../../lib/supabase';
import { useParams } from 'next/navigation';
type Restaurant = {
  id: string;
  name: string;
  description: string;
  description1: string;
  description2: string;
  image_url: string;
  image_url1: string;
  image_url2: string;
  image_url3: string;
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
      <img
        src={restaurant.image_url}
        alt={restaurant.name}
        className="w-full h-64 object-cover rounded-lg mb-6 mx-auto"
      />
      <h1 className="text-3xl font-bold mb-4 text-center">{restaurant.name}</h1>
      <div className="description space-y-6 max-w-2xl mx-auto">
        <div className="image-description-group flex flex-col items-center text-center">
          <img
            src={restaurant.image_url1} 
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700">{restaurant.description}</p>
        </div>
        <div className="image-description-group flex flex-col items-center text-center">
          <img
            src={restaurant.image_url2}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700">{restaurant.description1}</p>
        </div>
        <div className="image-description-group flex flex-col items-center text-center">
          <img
            src={restaurant.image_url3}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700">{restaurant.description2}</p>
        </div>
        <div className="contact-info bg-gray-100 p-4 rounded-lg text-center">
          <p className="text-gray-800"><strong>ที่ตั้ง:</strong>{restaurant.location}</p>
          <p className="text-gray-800"><strong>เวลาเปิด-ปิด:</strong> {restaurant.opening_hours}</p>
          <p className="text-gray-800"><strong>ติดต่อ:</strong> {restaurant.contact}</p>
        </div>
      </div>
    </div>
  );
}