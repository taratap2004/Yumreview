'use client';

import { useState } from 'react';
import { supabase } from '../../lib/supabase';
import { useRouter } from 'next/navigation';

export default function AddRestaurantPage() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [description1, setDescription1] = useState('');
  const [description2, setDescription2] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageUrl1, setImageUrl1] = useState('');
  const [imageUrl2, setImageUrl2] = useState('');
  const [location, setLocation] = useState('');
  const [openingHours, setOpeningHours] = useState('');
  const [contact, setContact] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const { error } = await supabase
      .from('restaurants')
      .insert([
        {
          name,
          description,
          description1,
          description2,
          image_url: imageUrl,
          image_url1: imageUrl1,
          image_url2: imageUrl2,
          opening_hours: openingHours,
          contact,
        }
      ]);

    if (error) {
      console.error('Error adding restaurant:', error);
      setError('เกิดข้อผิดพลาดในการเพิ่มร้านอาหาร กรุณาลองใหม่');
    } else {
      alert('เพิ่มร้านอาหารเรียบร้อย!');
      router.push('/'); // 🔥 Redirect ไปหน้าหลัก
    }
    setLoading(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">เพิ่มร้านอาหาร</h1>

      {error && <div className="text-red-600 mb-4">{error}</div>}

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
          <label className="block text-sm font-medium text-gray-700">คำอธิบาย</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">URL รูปภาพเพิ่มเติม</label>
          <input
            type="text"
            value={imageUrl1}
            onChange={(e) => setImageUrl1(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">คำอธิบายเพิ่มเติม</label>
          <textarea
            value={description1}
            onChange={(e) => setDescription1(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">URL รูปภาพเพิ่มเติม</label>
          <input
            type="text"
            value={imageUrl2}
            onChange={(e) => setImageUrl2(e.target.value)}
            className="w-full p-2 border rounded-md"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">คำอธิบายเพิ่มเติม</label>
          <textarea
            value={description2}
            onChange={(e) => setDescription2(e.target.value)}
            className="w-full p-2 border rounded-md"
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

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'กำลังเพิ่ม...' : 'เพิ่มร้านอาหาร'}
        </button>
      </form>
    </div>
  );
}
