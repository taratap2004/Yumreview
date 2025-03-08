import SearchBar from '../components/SearchBar';
import CategoryButtons from '../components/CategoryButtons';
import RestaurantCard from '../components/RestaurantCard';

const HomePage: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'LemonChiffon',  height: '100vh', borderRadius: '15px 15px  0 0'}}>
      <SearchBar />
      <CategoryButtons />
      <h1 style={{textAlign: 'center', fontSize: '2rem'}}>
        รายการแนะนำ
      </h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '20px'}}>
        <RestaurantCard name="ชื่อร้าน 1" id={'701b9ee9-9c56-4901-b662-db71c469a2d6'} imageUrl={'https://cms.dmpcdn.com/food/2023/02/23/45f22f80-b3ac-11ed-847b-5bfda9f44996_original.jpg'} />
        <RestaurantCard name="ชื่อร้าน 2" id={''} imageUrl={'https://cms.dmpcdn.com/food/2023/02/23/45f22f80-b3ac-11ed-847b-5bfda9f44996_original.jpg'} />
        <RestaurantCard name="ชื่อร้าน 3" id={''} imageUrl={'https://cms.dmpcdn.com/food/2023/02/23/45f22f80-b3ac-11ed-847b-5bfda9f44996_original.jpg'} />
      </div>
    </div>
    
  );
};

export default HomePage;