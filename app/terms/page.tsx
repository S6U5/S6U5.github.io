// pages/terms.tsx
import Head from "next/head";

// ====== 編集ポイント（ここだけ直せば本文も連動）======
const SITE_NAME = "S6U5 Portfolio";
const SITE_URL = "https://s6u5.github.io";
const OPERATOR_NAME = "浦野 真吾";
const CONTACT = "/business-card";
const ENACTED_ON = "2025年11月7日";
const LAST_UPDATED_ON = "2025年11月7日";
// ======================================================

export default function TermsPage() {
  const title = `利用規約 | ${SITE_NAME}`;
  const description = `${SITE_NAME}（${SITE_URL}）の利用規約です。`;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`${SITE_URL}/terms`} />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta name="robots" content="index,follow" />
      </Head>
      <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 mt-4 prose max-w-none">
        <main className="mx-auto max-w-3xl px-4 py-10 md:px-8">
          <article className="prose prose-neutral dark:prose-invert">
            <h1>利用規約</h1>

            <p>
              本利用規約（以下「本規約」）は、<strong>{SITE_NAME}</strong>（以下「当サイト」）が
              <strong>{SITE_URL}</strong> 上で提供するコンテンツおよび情報（以下「本サービス」）の利用条件を定めるものです。利用者は、本規約に同意したうえで本サービスを利用するものとします。
            </p>

            <h2>1. 適用</h2>
            <p>
              本規約は、利用者と当サイトとの間の本サービスの利用に関わる一切の関係に適用されます。当サイトは必要に応じて本規約のほか、個別規定・ガイドライン等（以下「個別規定」）を定めることがあり、これらは本規約の一部を構成します。
            </p>

            <h2>2. 利用条件</h2>
            <ul>
              <li>利用者は、自己の責任において本サービスを利用するものとします。</li>
              <li>未成年者が利用する場合、法定代理人の同意を得たうえで利用してください。</li>
              <li>本サービスは主として情報提供・ポートフォリオ掲出を目的とし、正確性・完全性・有用性等を保証するものではありません。</li>
            </ul>

            <h2>3. 禁止事項</h2>
            <p>利用者は、以下の行為をしてはなりません。</p>
            <ul>
              <li>法令または公序良俗に違反する行為</li>
              <li>当サイトまたは第三者の権利・利益を侵害する行為（著作権、商標権、プライバシー等）</li>
              <li>本サービスの運営を妨害する行為、過度な負荷を与える行為、不正アクセス等</li>
              <li>虚偽の情報の送信、なりすまし</li>
              <li>反社会的勢力等への利益供与、または関与</li>
              <li>その他、当サイトが不適切と判断する行為</li>
            </ul>

            <h2>4. 知的財産権</h2>
            <p>
              本サービスに掲載される文章・画像・ソースコード等（ユーザー投稿を除く）の知的財産権は当サイトまたは正当な権利者に帰属します。私的利用の範囲を超える複製・転載・二次利用等には権利者の許可が必要です。
            </p>

            <h2>5. 免責事項</h2>
            <ul>
              <li>当サイトは、本サービスの内容、提供、利用により利用者に生じた損害について、一切の責任を負いません。</li>
              <li>外部サイトへのリンクが含まれる場合がありますが、リンク先の内容について責任を負いません。</li>
              <li>当サイトは、事前予告なく本サービスの内容を変更・中断・終了することがあります。</li>
            </ul>

            <h2>6. サービスの提供の停止</h2>
            <p>
              当サイトは、システム保守・障害・天災等、やむを得ない事由により本サービスの提供を一時停止する場合があります。この場合に利用者に生じた損害について、当サイトは責任を負いません。
            </p>

            <h2>7. 規約の変更</h2>
            <p>
              当サイトは、必要と判断した場合、予告なく本規約を変更できます。変更後の規約は、当サイトに掲示した時点より効力を生じます。重要な変更を行う場合、合理的な方法で告知するよう努めます。
            </p>

            <h2>8. 個人情報の取扱い</h2>
            <p>
              個人情報の取扱いについては、当サイトの{" "}
              <a href="/privacy-policy">プライバシーポリシー</a> に従います。
            </p>

            <h2>9. 準拠法・管轄</h2>
            <p>
              本規約の解釈・適用は日本法に準拠します。本サービスに関して当サイトと利用者の間で紛争が生じた場合、<strong>東京地方裁判所</strong>
              を第一審の専属的合意管轄裁判所とします（必要に応じて変更してください）。
            </p>

            <h2>10. お問い合わせ</h2>
            <p>
              本規約に関するお問い合わせは、以下までお願いいたします。<br />
              運営者：<strong>{OPERATOR_NAME}</strong>
              <br />
              連絡先：<strong><a href={CONTACT}>SNS一覧へ</a></strong>
            </p>

            <hr />
            <p className="opacity-80 text-sm">
              制定日：<strong>{ENACTED_ON}</strong>
              <br />
              最終更新日：<strong>{LAST_UPDATED_ON}</strong>
            </p>
          </article>
        </main>
      </div>
    </>
  );
}
