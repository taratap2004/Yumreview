
'use client';
import React from 'react';
import SearchBar from '../components/SearchBar';
import CategoryButtons from '../components/CategoryButtons';
import RestaurantCard from '../components/RestaurantCard';
import Navbar from '@/components/Navbar';


const HomePage: React.FC = () => {
  return (
    <div>
     

      <Navbar />
      <SearchBar />
      <CategoryButtons />
      <h2>รายการแนะนำ</h2>
      <div style={{ display: 'flex' }}>
        <RestaurantCard name="ชื่อร้าน 1" />
        <RestaurantCard name="ชื่อร้าน 2" />
        <RestaurantCard name="ชื่อร้าน 3" />

      </div>
    </div>
  );
};


export default HomePage;