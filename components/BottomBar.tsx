"use client";
import Link from "next/link"; 

export default function BottomBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-md">
      <ul className="flex justify-around items-center h-14 text-gray-700 text-sm">
        <li className="hover:text-blue-500">
          <Link href="/">🏠 Home</Link>
        </li>
        <li className="hover:text-blue-500">
          <Link href="/search">🔍 Search</Link>
        </li>
        <li className="hover:text-blue-500">
          <Link href="/profile">👤 Profile</Link>
        </li>
      </ul>
    </nav>
  );
}
