import Image from "next/image";

interface BusinessCardProps {
  name: string;
  title: string;
  company?: string;
  description?: string;
  image?: string; // ロゴまたはプロフィール画像
  email?: string;
  phone?: string;
  website?: string;
  className?: string; // 外部からTailwindで上書き可能
}

export default function BusinessCard({
  name,
  title,
  company,
  description,
  image = "/images/default-avatar.png",
  email,
  phone,
  website,
  className = "",
}: BusinessCardProps) {
  return (
    <div
      className={`bg-white rounded-xl shadow-md border border-gray-200 p-6 flex flex-col md:flex-row items-center gap-4 ${className}`}
    >
      {/* 画像部分 */}
      <div className="flex-shrink-0">
        <Image
          src={image}
          alt={name}
          width={100}
          height={100}
          className="rounded-full object-cover border border-gray-300"
        />
      </div>

      {/* テキスト部分 */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-xl font-semibold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-600">{title}</p>
        {company && <p className="text-sm text-gray-500 mt-1">{company}</p>}
        {description && (
          <p className="text-sm text-gray-700 mt-3 leading-relaxed">{description}</p>
        )}

        {/* 連絡先 */}
        <div className="mt-4 text-sm text-gray-600 flex flex-col gap-1">
          {email && (
            <a href={`mailto:${email}`} className="hover:text-sky-600">
              ✉️ {email}
            </a>
          )}
          {phone && <p>📞 {phone}</p>}
          {website && (
            <a href={website} className="hover:text-sky-600" target="_blank" rel="noopener noreferrer">
              🔗 {website}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}