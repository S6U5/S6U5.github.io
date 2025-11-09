import Image from "next/image";
import Link from "next/link";
import React from "react";

interface PhotoProps {
  src?: string;
  children?: React.ReactNode;
  href?: string;
  size?: number | string;
  bgColor?: string;     // tailwindクラスを想定
  borderColor?: string; // tailwindクラスを想定
  alt?: string;
  className?: string;
  type?: "roundedRect" | "circle" | "square";
}

export default function PhotoIcon({
  src,
  children,
  href,
  size = 80,
  bgColor = "bg-gray-100",
  borderColor = "border-gray-300",
  alt = "",
  className = "",
  type = "roundedRect",
}: PhotoProps) {
  const shapeClass =
    type === "circle"
      ? "rounded-full"
      : type === "square"
        ? "rounded-none"
        : "rounded-xl";

  const style: React.CSSProperties =
    typeof size === "number" ? { width: size, height: size } : { width: size, height: size };

  const content = (
    <div
      className={`
        relative overflow-hidden border flex items-center justify-center
        ${bgColor} ${borderColor} ${shapeClass} ${className}
      `}
      style={style}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="80px"
          className={`object-cover ${shapeClass}`}
        />
      ) : (
        // 画像がないときは子要素やイニシャルを真ん中に
        <span className="text-sm text-gray-500">{children ?? "No Image"}</span>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return content;
}