import Image from "next/image";
import Link from "next/link";

interface CircleProps {
  /** 表示する画像URL（なければ children を表示） */
  src?: string;
  /** 画像の代わりに表示する中身（アイコン・テキストなど） */
  children?: React.ReactNode;
  /** リンク先URL（指定されていればクリック可能） */
  href?: string;
  /** サイズ(px または Tailwindクラス) */
  size?: number | string;
  /** 背景色 */
  bgColor?: string;
  /** 枠線色 */
  borderColor?: string;
  /** altテキスト（画像時） */
  alt?: string;
  /** カスタムクラス */
  className?: string;
}

export default function Circle({
  src,
  children,
  href,
  size = 80,
  bgColor = "bg-gray-100",
  borderColor = "border-gray-300",
  alt = "",
  className = "",
}: CircleProps) {
  const sizeClass = typeof size === "number" ? `w-[${size}px] h-[${size}px]` : size;

  const content = (
    <div
      className={`
        ${bgColor} ${borderColor} ${sizeClass} ${className}
        rounded-full flex items-center justify-center overflow-hidden border
        transition-transform duration-200 ease-out
        ${href ? "cursor-pointer hover:scale-105" : ""}
      `}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={100}
          height={100}
          className="object-cover w-full h-full"
        />
      ) : (
        children
      )}
    </div>
  );

  // 🔗 URLが指定されていればLinkでラップ
  return href ? (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      {content}
    </Link>
  ) : (
    content
  );
}
