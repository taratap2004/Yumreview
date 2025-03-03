"use client";
import { useState } from "react";


const categories = ["ปิ้งย่าง", "ชาบู", "ซีฟู้ด", "อีสาน", "ของหวาน"];
const restaurants = [
  { id: 1, name: "ร้านอร่อย A", image: "/placeholder.jpg" },
  { id: 2, name: "ร้านอร่อย B", image: "/placeholder.jpg" },
  { id: 3, name: "ร้านอร่อย C", image: "/placeholder.jpg" },
];

export default function HomePage() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-md">

      </header>

      {/* Hero Section */}
      <section className="relative p-6 bg-yellow-100">
        <div className="relative w-full max-w-4xl mx-auto">
          <img
            src="/food.jpg"
            alt="Banner"
            className="w-full h-40 object-cover rounded-lg"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center bg-black/50 rounded-lg">
            <input
              type="text"
              placeholder="search...."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="p-2 w-3/4 md:w-1/2 rounded-full text-black bg-white shadow-md"
            />
            <p className="text-white font-semibold mt-2 text-lg">
              ตามหาร้านอร่อยในโคราช เราคัดสรรมาให้คุณแล้ว
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="flex justify-center space-x-4 p-4">
        {categories.map((category) => (
          <button key={category} className="px-4 py-2 bg-white shadow-md rounded-full font-medium">
            {category}
          </button>
        ))}
      </div>

      {/* Recommended Restaurants */}
      <section className="p-6">
        <h2 className="text-lg font-semibold mb-4">รายการแนะนำ</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {restaurants.map((restaurant) => (
            <div key={restaurant.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={restaurant.image} alt={restaurant.name} className="w-full h-32 object-cover rounded-md" />
              <h3 className="mt-2 text-center font-semibold">{restaurant.name}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> a1445b1e33693c4dd0cf8b0910db465dfbf0904e
