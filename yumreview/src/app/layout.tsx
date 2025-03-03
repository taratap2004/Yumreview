import Navbar from '../components/Navbar'; // นำเข้า Navbar
import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* แสดง Navbar */}
        {children}
      </body>
    </html>
  );
}