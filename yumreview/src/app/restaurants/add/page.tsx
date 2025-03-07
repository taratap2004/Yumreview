'use client';
import { useState } from 'react';
import { supabase } from '../../../../lib/supabase';
import { useRouter } from 'next/navigation';

export default function AddRestaurantPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [location, setLocation] = useState('');
  const [openingHours, setOpeningHours] = useState('');
  const [contact, setContact] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('restaurants')
      .insert([{ name, description, image_url: imageUrl, location, opening_hours: openingHours, contact }]);

    if (error) {
      console.error('Error adding restaurant:', error);
    } else {
      console.log('Restaurant added successfully:', data);
      alert('Restaurant added successfully!');
      router.push('/restaurants'); // กลับไปที่หน้ารายการร้านอาหาร
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">เพิ่มร้านอาหาร</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">ชื่อร้าน</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">คำอธิบาย (Markdown)</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">URL รูปภาพหลัก</label>
          <input
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">ที่ตั้ง</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">เวลาเปิด-ปิด</label>
          <input
            type="text"
            value={openingHours}
            onChange={(e) => setOpeningHours(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">ติดต่อ</label>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
          เพิ่มร้านอาหาร
        </button>
      </form>
    </div>
  );
}