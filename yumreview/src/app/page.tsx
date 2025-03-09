import SearchBar from '../components/SearchBar';
import CategoryButtons from '../components/CategoryButtons';
import RestaurantCard from '../components/RestaurantCard';


const HomePage: React.FC = () => {
  return (
    <div style={{ backgroundColor: 'LemonChiffon', borderRadius: '15px 15px  0 0'}}>
      <SearchBar />
      <CategoryButtons />
      <h3 style={{
        textAlign: 'left',
        fontSize: '1.5rem',
        fontFamily: "'Poppins', sans-serif",
        fontWeight: '600',
        color: '#222',
        textShadow: '4px 4px 8px rgba(0, 0, 0, 0.4)',
        transition: 'text-shadow 0.3s ease-in-out',
        paddingLeft: '20px'
      }}>
        รายการแนะนำ
      </h3>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap : '89px', padding: '20px'  }}>
        <RestaurantCard name="ชิวเล้า" id={'02702524-f208-43e3-9e02-94eafeb82a93'} imageUrl={'Logochiwlao.jpg'} />
        <RestaurantCard name="ตั้งใจตำ (TungJaiTum)" id={'c53606d8-40ae-43e6-ac47-2da4667c1185'} imageUrl={'https://th.bing.com/th/id/OIP.4GHy7qVhAuIF8V2OLyxJcgHaHa?rs=1&pid=ImgDetMain'} />
        <RestaurantCard name="ติ๋มนมสด (Tim-Nom-Sod)" id={'b63d3c1f-9e64-4783-ae9b-5dcf553e4134'} imageUrl={'tim.jpg'}/>
        <RestaurantCard name="กุ้งถังโคราช" id={'970ebca1-c8f3-433f-9bf3-3ae5546d5229'} imageUrl={'Kung.jpg'}/>
        <RestaurantCard name="ป๋าโก้ หมูกระทะ&ซีฟู้ด บุฟเฟ่ต์" id={'1871e8f7-3ba2-4bb3-b7b1-8a80d7499d63'} imageUrl={'pago.jpg'}/>
      </div>

    </div>

  );
};

export default HomePage;