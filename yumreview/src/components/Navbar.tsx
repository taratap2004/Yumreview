import Link from 'next/link';
import { Home, LogIn } from 'react-feather';
const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white border-b border-gray-200">
      <div className="text-xl font-bold">YumReview</div>
      <div className="flex items-center space-x-4">
        <Link href="/">
          <Home size={24} className="text-gray-800 hover:text-gray-600" />
        </Link>
        <Link href="/login">
          <LogIn size={24} className="text-gray-800 hover:text-gray-600" />
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;