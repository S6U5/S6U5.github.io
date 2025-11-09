// components/history-card/Card.tsx
import PhotoIcon from "./PhotoIcon";
import CommonContainer from "../CommonContainer";

/** 画像タイプの候補（PhotoIcon.type と一致させる） */
export type ImgType = "circle" | "roundedRect" | "square";

/** カードの受け取りProps */
export interface CardProps {
  /** [0] が見出し、以降がサブタイトル */
  titleList: [string, ...string[]];
  /** サムネイル画像パス */
  img: string;
  /** サムネイルの見た目（円/角丸/四角） */
  imgType?: ImgType;
  /** サムネイルのサイズ(px) */
  size?: number;
  /** クリック先（不要なら省略） */
  href?: string;

  /** 本文（改行そのまま表示） */
  description?: string;

  /** 期間（ISO文字列推奨） */
  periodStart?: string;
  periodEnd?: string;

  /** 日付表示の精度 */
  dateMode?: "ym" | "ymd";

  /** ラッパに追加したいクラス（任意） */
  className?: string;

  /** 枠線/影を消したい場合（任意）— CardTree から制御 */
  borderless?: boolean;
}

/** 日付整形ユーティリティ */
const fmtDate = (iso?: string, mode: "ym" | "ymd" = "ym") => {
  if (!iso) return "";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return "";
  const optYM: Intl.DateTimeFormatOptions = { year: "numeric", month: "numeric" };
  const optYMD: Intl.DateTimeFormatOptions = { year: "numeric", month: "numeric", day: "numeric" };
  return new Intl.DateTimeFormat("ja-JP", mode === "ym" ? optYM : optYMD).format(d);
};

export default function Card({
  titleList,
  img,
  imgType = "circle",
  size = 108,
  href,
  description = "",
  periodStart,
  periodEnd,
  dateMode = "ymd",
  className = "",
  borderless = false,
}: CardProps) {
  // 期間ラベル生成
  const startD = periodStart ? new Date(periodStart) : undefined;
  const endD = periodEnd ? new Date(periodEnd) : undefined;
  const sameDay = startD && endD && startD.getTime() === endD.getTime();

  const startLabel = fmtDate(periodStart, dateMode);
  const endLabel = endD ? fmtDate(periodEnd, dateMode) : "現在";

  const periodLabel =
    startD && endD
      ? sameDay
        ? startLabel
        : `${startLabel} 〜 ${endLabel}`
      : startD
        ? `${startLabel} 〜 ${endLabel}` // end 無しは「〜現在」
        : "";

  return (
    <CommonContainer borderless={borderless} className={className}>
      <div className="flex items-start gap-4">
        <PhotoIcon
          src={img}
          alt={titleList[0]}
          size={size}
          type={imgType}
          href={href}
        />

        <div className="flex flex-col items-start gap-1">
          {/* 見出し + 期間（同一行。狭い画面では自動で折返し） */}
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <span className="text-base font-semibold">{titleList[0]}</span>
            {periodLabel && (
              <span className="text-xs sm:text-sm text-gray-500">
                {periodLabel}
              </span>
            )}
          </div>

          {/* サブ行（少し薄め） */}
          {titleList.slice(1).map((t, i) => (
            <p key={i} className="text-sm text-gray-500">
              {t}
            </p>
          ))}

          {/* 改行入りテキストは whitespace-pre-line */}
          {description && (
            <p className="mt-2 whitespace-pre-line break-words text-sm text-gray-700">
              {description}
            </p>
          )}
        </div>
      </div>
    </CommonContainer>
  );
}
