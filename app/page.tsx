"use client";

import { useEffect, useMemo, useState } from "react";

import GridCard2x2 from "@/components/GridCard2x2";

type Intro = {
  jp: string;
  en?: string;
  tags?: string[];
};

const FACTS: Intro[] = [
  { jp: "SOCアナリスト → バックエンド志望。ものづくりが大好き。" },
  { jp: "趣味はレーザー加工と3Dプリント。Gweike G2 20W愛用。" },
  { jp: "Next.js / Django を勉強中。DevContainer で環境統一派。" },
  { jp: "コーヒーは浅煎り派。V60でハンドドリップします。" },
  { jp: "投資はNISA中心。データはPythonで可視化してます。" },
  { jp: "横浜拠点。フル出社も対応可。スタートアップ歓迎。" },
];

function pickAnother<T>(list: T[], prev?: T) {
  if (list.length === 0) return undefined;
  if (list.length === 1) return list[0];
  let next: T;
  do {
    next = list[Math.floor(Math.random() * list.length)];
  } while (next === prev);
  return next;
}

export default function RandomIntro() {
  const facts = useMemo(() => FACTS, []);
  const [current, setCurrent] = useState<Intro | null>(null);
  const [copied, setCopied] = useState(false);

  // 初回はクライアント側でランダムにセット（SSRとの不一致を避ける）
  useEffect(() => {
    setCurrent(pickAnother(facts) || null);
  }, [facts]);

  const shuffle = () => {
    setCopied(false);
    setCurrent((prev) => pickAnother(facts, prev || undefined) || prev);
  };

  const copy = async () => {
    if (!current) return;
    try {
      await navigator.clipboard.writeText(current.jp + (current.en ? `\n${current.en}` : ""));
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      // 失敗しても無視（Safari等）
    }
  };

  return (
    <>
      <div className="w-full max-w-xl mx-auto p-5 border rounded-2xl shadow-sm bg-white/60">
        <div className="text-sm text-gray-500 mb-2">Random Intro</div>
        <div className="animate-bounce text-4xl">⬇️</div>
        <div className="text-lg md:text-xl leading-relaxed">
          {current ? current.jp : "…"}
          {current?.en && <div className="text-gray-500 text-base mt-1">{current.en}</div>}
        </div>

        <div className="flex gap-3 mt-4">
          <button
            onClick={shuffle}
            className="px-4 py-2 rounded-xl border bg-gray-50 hover:bg-gray-100 active:scale-[0.98] transition"
            aria-label="ランダムに入れ替え"
          >
            🔀 ランダム
          </button>
          <button
            onClick={copy}
            className="px-4 py-2 rounded-xl border bg-gray-50 hover:bg-gray-100 active:scale-[0.98] transition"
            aria-label="コピー"
          >
            {copied ? "✅ コピー済み" : "📋 コピー"}
          </button>
        </div>
      </div>
      {/* <main className="min-h-screen bg-white">
        <h1 className="text-2xl font-bold p-4">特技・趣味</h1>
        <GridCard2x2 />
      </main> */}
    </>
  );
}
