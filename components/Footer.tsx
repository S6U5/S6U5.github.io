// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 text-gray-600 py-6 mt-8 border-t">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">© 2025 S6U5. All rights reserved.</p>

        <ul className="flex gap-4 mt-3 md:mt-0">
          <li><a href="/privacy" className="hover:underline">プライバシー</a></li>
          <li><a href="/terms" className="hover:underline">利用規約</a></li>
          <li><a href="/contact" className="hover:underline">お問い合わせ</a></li>
        </ul>
      </div>
    </footer>
  );
}