
export default function Navbar() {
  return (
    <nav className="bg-white border-b px-6 py-4 flex justify-end items-center shadow-sm">
      <div className="space-x-4 text-sm font-medium text-gray-600">
        <a href="#about" className="hover:text-black">About</a>
        <a href="#how" className="hover:text-black">How It Works</a>
        <a href="#check" className="hover:text-black">Check</a>
      </div>
    </nav>
  );
}
