// app/privacy-policy/page.tsx
import type { Metadata } from "next";

// ====== 編集ポイント（ここだけ直せば本文も連動）======
const SITE_NAME = "S6U5 Portfolio";
const SITE_URL = "https://s6u5.github.io";
const OPERATOR_NAME = "浦野 真吾";
const CONTACT = "（お問い合わせフォームURL か メールアドレス）";
const ENACTED_ON = "2025年11月7日"; // 制定日
// ======================================================

export const metadata: Metadata = {
  title: `プライバシーポリシー | ${SITE_NAME}`,
  description:
    `${SITE_NAME}（${SITE_URL}）における個人情報の取扱い方針です。`,

  openGraph: {
    title: `プライバシーポリシー | ${SITE_NAME}`,
    description:
      `${SITE_NAME}（${SITE_URL}）における個人情報の取扱い方針です。`,
    url: `${SITE_URL}/privacy-policy`,
    siteName: SITE_NAME,
    type: "article",
  },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 mt-4 prose max-w-none">
      <main className="mx-auto max-w-3xl px-4 py-10 md:px-8">
        <article className="prose prose-neutral dark:prose-invert">
          <h1>プライバシーポリシー</h1>

          <p>
            <strong>{SITE_NAME}</strong>（以下、「当サイト」といいます。）は、当サイト（
            <strong>{SITE_URL}</strong>
            ）上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
          </p>

          <h2>1. 基本方針</h2>
          <p>
            当サイトは、個人情報の重要性を認識し、適用される法令・ガイドラインを遵守のうえ、取得・利用・管理を適正に行います。
          </p>

          <h2>2. 適用範囲</h2>
          <p>
            本ポリシーは、当サイトが本サービスの提供に関連して取り扱う、個人情報またはそれに準ずる情報に適用されます。
          </p>

          <h2>3. 個人情報の利用目的</h2>
          <p>当サイトは、ご提供いただいた情報を以下の目的で利用します。</p>
          <ul>
            <li>ご本人確認・不正利用防止のため</li>
            <li>お問い合わせ・ご依頼等への確認および回答のため</li>
            <li>本サービスの提供・運営・品質改善・新機能開発・マーケティングのため</li>
            <li>（必要に応じて）お知らせ・メールマガジン等の配信のため</li>
            <li>（必要に応じて）利用規約等に違反する行為への調査・対応のため</li>
            <li>その他、個別に同意いただいた目的</li>
          </ul>

          <h2>4. 個人情報の管理</h2>
          <p>
            当サイトは、個人情報の正確性・安全性確保のため、必要かつ適切な安全管理措置を講じます。また、通信の安全性確保のため、適切な暗号化（例：TLS/SSL）を利用します。
          </p>

          <h2>5. 個人情報の第三者提供</h2>
          <p>以下の場合を除き、個人情報を第三者に提供しません。</p>
          <ul>
            <li>ご本人の同意がある場合</li>
            <li>法令に基づく場合</li>
            <li>人の生命・身体・財産の保護のために必要で、同意取得が困難な場合</li>
            <li>公衆衛生の向上や児童の健全な育成のために特に必要で、同意取得が困難な場合</li>
            <li>
              国または地方公共団体等が法令の定める事務を遂行することに協力する必要があり、同意取得により当該事務の遂行に支障が生じるおそれがある場合
            </li>
          </ul>
          <p>
            {/* 利用している場合だけ文言を残す */}
            なお、利用目的の達成に必要な範囲で業務委託を行う場合、委託先に個人情報を預託することがあります。この場合、当サイトは委託先に対し適切な管理・監督を行います。
          </p>

          <h2>6. 開示等の請求・お問い合わせ</h2>
          <p>
            ご本人からの開示・訂正・追加・削除・利用停止のご請求があった場合、法令に基づき適切に対応します。ご希望の際は
            <strong>{CONTACT}</strong> よりご連絡ください。
          </p>

          <h2>7. Cookie（クッキー）</h2>
          <p>
            当サイトは利用状況の把握等のためCookieを使用する場合があります。Cookieはブラウザ設定で無効化できますが、一部機能が正しく動作しない場合があります。
          </p>

          <h2>8. アクセス解析</h2>
          <p>
            当サイトはサイト改善のためアクセス解析ツール（例：Google アナリティクス）を利用する場合があります。取得データは匿名で収集され、個人を特定しません。詳細は各提供事業者のポリシーをご確認ください：
          </p>
          <ul>
            <li>
              <a
                href="https://marketingplatform.google.com/about/analytics/terms/jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google アナリティクス利用規約
              </a>
            </li>
            <li>
              <a
                href="https://policies.google.com/technologies/ads?gl=jp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google ポリシーと規約
              </a>
            </li>
          </ul>

          {/* ===== ここからオプション：利用しているときだけコメントを外す ===== */}

          {/*
        <h2>9. 広告配信</h2>
        <p>
          当サイトは、第三者配信の広告サービス（例：Google アドセンス）を利用する場合があります。広告配信事業者は、適切な広告表示のためCookie等を使用することがあります。詳細は
          <a
            href="https://policies.google.com/technologies/ads?gl=jp"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google ポリシーと規約 - 広告
          </a>
          をご確認ください。
        </p>
        <p>
          また、当サイトが Amazon アソシエイト・プログラムに参加する場合、その旨をここに明記します。
        </p>

        <h2>10. コメント・お問い合わせフォーム</h2>
        <p>
          フォーム経由で送信された情報（お名前、メールアドレス等）を取得します。スパム対策のため、送信時にIPアドレスやユーザーエージェント等を取得する場合があります。
        </p>

        <h2>11. 他サイトからの埋め込みコンテンツ</h2>
        <p>
          当サイトのページには、他サイトのコンテンツ（動画・画像等）が埋め込まれる場合があります。埋め込み先サイトは、Cookieの使用、追跡、やり取りの記録等を行うことがあります。
        </p>
        */}

          {/* ===== ここまでオプション ===== */}

          <h2>12. プライバシーポリシーの変更</h2>
          <p>
            法令改正その他必要に応じ、当サイトは本ポリシーを予告なく変更することがあります。変更後は、当ページに掲載された時点で効力を生じます。
          </p>

          <h2>13. 免責事項</h2>
          <p>
            当サイトから外部サイトへ遷移した場合、遷移先で提供される情報・サービス等について当サイトは一切の責任を負いません。当サイトは正確な情報提供に努めますが、内容の正確性・安全性等を保証するものではありません。
          </p>

          <h2>14. 運営者情報</h2>
          <p>
            サイト運営者：<strong>{OPERATOR_NAME}</strong>
            <br />
            連絡先：<strong>{CONTACT}</strong>
            <br />
            制定日：{ENACTED_ON}
          </p>
        </article>
      </main>
    </div>
  );
}
