// components/history-card/CardTree.tsx
"use client";

import { useEffect, useMemo, useState, memo } from "react";
import YAML from "yaml";
import Card from "./Card";

/* ========= 型 ========= */
type CardType = "normal" | "noBorder";

export interface CareerNode {
  title: [string, ...string[]];
  cardType?: CardType;
  img?: string;
  href?: string;
  description?: string;
  period?: { start?: string; end?: string };
  dateMode?: "ym" | "ymd";
  children?: CareerNode[];
}

interface CareerYaml {
  profile?: { name?: string };
  entries: CareerNode[];
}

/* ========= ユーティリティ ========= */
const withBasePath = (p: string) =>
  `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${p.startsWith("/") ? p : `/${p}`}`;

/** 最新ノードを選ぶ（end 優先、なければ start。未設定は最古扱い） */
const pickLatestIndex = (nodes: CareerNode[]) => {
  let best = -1;
  let bestTime = -Infinity;
  nodes.forEach((n, i) => {
    const key = n.period?.end || n.period?.start;
    const t = key ? new Date(key).getTime() : -1e15;
    if (!Number.isNaN(t) && t > bestTime) {
      bestTime = t;
      best = i;
    }
  });
  return Math.max(best, 0);
};

/* ========= 単一ノード（子の折りたたみ付き） ========= */
/** Card に children は渡さず、見た目としてネスト表示にする */
const TreeItem = memo(function TreeItem({
  node,
  depth = 0,
}: {
  node: CareerNode;
  depth?: number;
}) {
  const [open, setOpen] = useState<boolean>(depth === 0); // ルートは開いた状態
  const borderless = node.cardType === "noBorder";
  const childCount = node.children?.length ?? 0;
  const hasChildren = childCount > 0;

  return (
    <div className="relative">
      {/* 親があるときの縦ガイド線 */}
      {depth > 0 && (
        <div className="absolute -left-3 top-0 h-full border-l border-gray-200 pointer-events-none" />
      )}

      {/* エルボー線（└） */}
      <div className={depth > 0 ? "pl-6 relative" : "relative"}>
        {depth > 0 && (
          <div className="absolute left-0 top-8 -ml-6 w-6 border-t border-gray-200" aria-hidden />
        )}

        {/* 本体カード（単体表示） */}
        <Card
          titleList={node.title}
          img={node.img || ""}
          href={node.href}
          description={node.description}
          periodStart={node.period?.start}
          periodEnd={node.period?.end}
          dateMode={node.dateMode || "ymd"}
          imgType="roundedRect"
          borderless={borderless}
          className=""
        />

        {/* 子ノード（Cardの外側でネスト表現） */}
        {hasChildren && (
          <div className="mt-2 pl-6">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="text-xs px-2 py-1 rounded-md border border-gray-300 hover:bg-gray-50"
            >
              {open ? "詳細を閉じる" : `詳細を開く（${childCount}）`}
            </button>

            {open && (
              <div className="mt-3 flex flex-col gap-3">
                {(node.children ?? []).map((child, idx) => (
                  <TreeItem key={idx} node={child} depth={depth + 1} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
});

/* ========= YAML 読み込み → 表示（完全フロントエンド） ========= */
export default function CardTree({ src = "/data/history.yml" }: { src?: string }) {
  const [data, setData] = useState<CareerYaml | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = withBasePath(src);
    (async () => {
      try {
        const res = await fetch(url, { cache: "no-store" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const text = await res.text();
        const parsed = YAML.parse(text) as CareerYaml;
        if (!parsed || !Array.isArray(parsed.entries)) {
          throw new Error("Invalid YAML: entries not found");
        }
        setData(parsed);
      } catch (e: unknown) {
        const message =
          e instanceof Error ? e.message : typeof e === "string" ? e : "failed to load yaml";
        setErr(message);
      } finally {
        setLoading(false);
      }
    })();
  }, [src]);

  const entries = useMemo<CareerNode[]>(() => data?.entries ?? [], [data]);
  const latestIdx = useMemo(() => (entries.length ? pickLatestIndex(entries) : 0), [entries]);

  const [showLatestOnly, setShowLatestOnly] = useState(true);
  const list = useMemo(
    () => (showLatestOnly && entries.length ? [entries[latestIdx]] : entries),
    [showLatestOnly, entries, latestIdx]
  );

  return (
    <section className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">
          {data?.profile?.name ? `${data.profile.name} の経歴` : "経歴"}
        </h2>
        <div className="flex items-center gap-2">
          <label className="text-sm text-gray-600">最新のみ表示</label>
          <input
            type="checkbox"
            className="h-4 w-4"
            checked={showLatestOnly}
            onChange={(e) => setShowLatestOnly(e.target.checked)}
            disabled={!entries.length}
          />
        </div>
      </div>

      {loading && <p className="text-gray-500">読み込み中...</p>}
      {err && <p className="text-red-600">読み込みエラー: {err}</p>}

      {!loading && !err && (
        <div className="flex flex-col gap-4">
          {list.map((node, i) => (
            <TreeItem key={i} node={node} depth={0} />
          ))}
          {!entries.length && (
            <p className="text-sm text-gray-500">表示できるエントリがありません。</p>
          )}
        </div>
      )}
    </section>
  );
}
