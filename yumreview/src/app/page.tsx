
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../lib/supabase'; // เชื่อมต่อกับ Supabase

type Restaurant = {
  id: string;
  name: string;
  description: string;
  image_url: string;
};

const HomePage = () => {
  const router = useRouter();
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

  // โหลดข้อมูลร้านอาหารจาก Supabase
  useEffect(() => {
    const fetchRestaurants = async () => {
      const { data, error } = await supabase.from('restaurants').select('*');
      if (error) {
        console.error(error);
      } else {
        setRestaurants(data || []);
      }
    };

    fetchRestaurants();
  }, []);

  // ฟังก์ชันสำหรับการคลิกที่ร้านอาหาร
  const handleRestaurantClick = (id: string) => {
    router.push(`/restaurants/${id}`);
  };

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {restaurants.length === 0 ? (
          <p>กำลังโหลดข้อมูลร้านอาหาร...</p>
        ) : (
          restaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="border rounded-lg shadow-lg p-4 cursor-pointer hover:shadow-xl transition"
              onClick={() => handleRestaurantClick(restaurant.id)}
            >
              <img
                src={restaurant.image_url}
                alt={restaurant.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-xl font-semibold">{restaurant.name}</h2>
              <p className="text-gray-500 mt-2">{restaurant.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
