import SearchBar from '../components/SearchBar';
import CategoryButtons from '../components/CategoryButtons';
import RestaurantCard from '../components/RestaurantCard';


const HomePage: React.FC = () => {
  return (
    <div>
      <SearchBar />
      <CategoryButtons />
      <h2>รายการแนะนำ</h2>
      <div style={{ display: 'flex' }}>
        <RestaurantCard name="ชื่อร้าน 1" id={''} imageUrl={'https://cms.dmpcdn.com/food/2023/02/23/45f22f80-b3ac-11ed-847b-5bfda9f44996_original.jpg'} />
        <RestaurantCard name="ชื่อร้าน 2" id={''} imageUrl={'https://cms.dmpcdn.com/food/2023/02/23/45f22f80-b3ac-11ed-847b-5bfda9f44996_original.jpg'} />
        <RestaurantCard name="ชื่อร้าน 3" id={''} imageUrl={'https://cms.dmpcdn.com/food/2023/02/23/45f22f80-b3ac-11ed-847b-5bfda9f44996_original.jpg'} />
      </div>
    </div>
  );
};

export default HomePage;