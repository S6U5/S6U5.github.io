"use client";

import { useState } from "react";

type Props = {
  text: string;           // コピーしたい生の文字列（ここでは Markdown）
  className?: string;     // 位置・見た目の上書き用
  label?: string;         // ボタンラベル
};

export default function CopyButton({ text, className = "", label = "Copy" }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      // まずは Clipboard API
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // フォールバック（選択→execCommand）
      const ta = document.createElement("textarea");
      ta.value = text;
      ta.style.position = "fixed";
      ta.style.left = "-9999px";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      } finally {
        document.body.removeChild(ta);
      }
    }
  };

  return (
    <button
      onClick={copy}
      aria-label="コピー（Markdown）"
      className={`px-3 py-1.5 rounded-md text-sm border bg-white/80 hover:bg-gray-50 shadow-sm active:scale-[0.98] transition ${className}`}
    >
      {copied ? "✅ Copied!" : label}
    </button>
  );
}
