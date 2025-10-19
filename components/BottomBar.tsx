"use client";
export default function BottomBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md">
      <ul className="flex justify-around items-center h-14 text-gray-700 text-sm">
        <li className="hover:text-blue-500">
          <a href="/">🏠 Home</a>
        </li>
        <li className="hover:text-blue-500">
          <a href="/search">🔍 Search</a>
        </li>
        <li className="hover:text-blue-500">
          <a href="/profile">👤 Profile</a>
        </li>
      </ul>
    </nav>
  );
}
