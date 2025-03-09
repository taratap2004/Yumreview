export default function Footer() {
  return (
    <footer className="p-4.5 bg-gray-100 text-center">
      <p className="text-sm text-gray-600">
        &copy; {new Date().getFullYear()} YumReview. All rights reserved.
      </p>
    </footer>
  );
}