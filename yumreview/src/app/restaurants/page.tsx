'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabase';
import Link from 'next/link';

type Restaurant = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  avg_rating: number; // ค่าเฉลี่ยคะแนนรีวิว
};

export default function RestaurantsPage() {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchRestaurants = async () => {
      const { data, error } = await supabase
        .from('restaurants')
        .select('*, avg_rating:reviews(rating)'); // ดึงคะแนนเฉลี่ยด้วย

      if (error) console.error(error);
      else {
        // คำนวณค่าเฉลี่ยรีวิว
        const processedData = data.map((restaurant) => ({
          ...restaurant,
          avg_rating: restaurant.avg_rating.length
            ? restaurant.avg_rating.reduce((acc: number, r: { rating: number }) => acc + r.rating, 0) / restaurant.avg_rating.length
            : 0,
        }));
        
        setRestaurants(processedData);
      }
    };

    fetchRestaurants();
  }, []);

  // ค้นหาตามชื่อร้าน
  const filteredRestaurants = restaurants
    .filter((r) => r.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => b.avg_rating - a.avg_rating); // จัดอันดับร้านตามคะแนนรีวิว

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">🍽 ร้านอาหารแนะนำ</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="🔍 ค้นหาร้านอาหาร..."
        className="border p-2 w-full rounded-md mb-4"
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Restaurant List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {filteredRestaurants.map((restaurant) => (
          <Link key={restaurant.id} href={`/restaurants/${restaurant.id}`} className="border rounded-lg shadow-md hover:shadow-lg transition">
            <img src={restaurant.image_url} alt={restaurant.name} className="w-full h-48 object-cover rounded-t-lg" />
            <div className="p-4">
              <h2 className="text-xl font-bold">{restaurant.name}</h2>
              <p className="text-gray-600">{restaurant.description}</p>
              <p className="text-yellow-500 mt-2">⭐ {restaurant.avg_rating.toFixed(1)} / 5</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

