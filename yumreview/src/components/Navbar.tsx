import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-lg font-bold">YumReview</Link>
        <div className="flex space-x-4">
          <Link href="/login" className="text-white">Login</Link>
          <input type="text" placeholder="Search..." className="p-2 rounded" />
        </div>
      </div>
    </nav>
  )
}