// app/contact/page.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/** ------- 編集ポイント ------- */
const SITE_NAME = "S6U5 Portfolio";
const CONTACT_ALT = "/business-card"; // SNS一覧などの代替連絡先
const PAGE_TITLE = `お問い合わせ | ${SITE_NAME}`;
const PAGE_DESC = `${SITE_NAME} へのお問い合わせ（送信はできません）`;
/** --------------------------- */

export default function Page() {
  // （見た目だけのフォーム。送信は不可）
  const [name, setName] = useState("");
  const [addr, setAddr] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // App RouterのClientコンポーネント1枚構成なので、SEOはJSで最低限セット
  useEffect(() => {
    document.title = PAGE_TITLE;

    const upsertMeta = (name: string, content: string) => {
      let el = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    upsertMeta("description", PAGE_DESC);
    upsertMeta("robots", "index,follow");
  }, []);

  return (
    <main className="mx-auto max-w-2xl px-4 py-10 md:px-8">
      <h1 className="mb-3 text-2xl font-bold">お問い合わせ</h1>
      <p className="mb-6 text-sm opacity-80">
        現在、このフォームからの送信は
        <span className="font-semibold"> 停止 </span>
        しています。連絡をご希望の方は
        <Link href={CONTACT_ALT} className="underline hover:opacity-100 ml-1">
          こちら（SNS一覧 / 代替連絡先）
        </Link>
        からお願いします。
      </p>

      {/* action / method を指定しない：送信経路なし */}
      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault(); // 念のため完全ブロック
          return false;
        }}
        aria-describedby="contact-disabled-note"
      >
        <div>
          <label className="mb-1 block font-medium" htmlFor="name">
            お名前
          </label>
          <input
            id="name"
            name="name"
            type="text"
            className="w-full rounded-md border px-3 py-2"
            placeholder="山田 太郎"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="off"
            inputMode="text"
          />
        </div>

        <div>
          <label className="mb-1 block font-medium" htmlFor="email">
            メールアドレス
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-md border px-3 py-2"
            placeholder="you@example.com"
            value={addr}
            onChange={(e) => setAddr(e.target.value)}
            autoComplete="off"
            inputMode="email"
          />
        </div>

        <div>
          <label className="mb-1 block font-medium" htmlFor="title">
            件名
          </label>
          <input
            id="title"
            name="title"
            type="text"
            className="w-full rounded-md border px-3 py-2"
            placeholder="件名"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            autoComplete="off"
          />
        </div>

        <div>
          <label className="mb-1 block font-medium" htmlFor="message">
            内容
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            className="w-full rounded-md border px-3 py-2"
            placeholder="お問い合わせ内容をご記入ください（送信はできません）"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <button
            type="submit"
            disabled
            aria-disabled="true"
            className="rounded-md bg-gray-300 px-5 py-2 text-gray-600 cursor-not-allowed disabled:opacity-70 dark:bg-neutral-700 dark:text-neutral-300"
            title="現在は送信できません"
          >
            送信は停止中
          </button>

          <Link href={CONTACT_ALT} className="underline opacity-80 hover:opacity-100">
            代替連絡先へ
          </Link>
        </div>

        <p id="contact-disabled-note" className="text-sm opacity-70">
          このフォームはハリボテ表示です。機密情報は記入しないでください。
        </p>
      </form>
    </main>
  );
}
