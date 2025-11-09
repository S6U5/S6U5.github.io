import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;      // 外側に追加したいクラス（優先度: 低）
  cardClassName?: string;  // カード本体に追加/上書きクラス（優先度: 高）
  /** 線(ボーダー)と影を消したい場合は true */
  borderless?: boolean;
};

// 構造の基本（ボーダーや影は含めない）
const CARD_STRUCTURE =
  "bg-white rounded-xl p-6 flex flex-col md:flex-row items-center gap-4";

export default function CommonContainer({
  children,
  className = "",
  cardClassName = "",
  borderless = false,
}: Props) {
  // 見た目バリアント（最後に置いて優先させる）
  const variant = borderless
    ? "border-0 shadow-none"
    : "border border-gray-200 shadow-md";

  return (
    <div className={`${CARD_STRUCTURE} ${variant} ${className} ${cardClassName}`}>
      {children}
    </div>
  );
}
