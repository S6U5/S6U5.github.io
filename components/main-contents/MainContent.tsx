import Image from "next/image";
import Card from "@/components/history-card/Card";
import CommonContainer from "../CommonContainer";

export default function Page() {
  return (
    <>


      <CommonContainer>
        経歴やportfolioを見やすく整理したページです！
        いったんデプロイします！(2025/11/10)
        経歴用のカードツリーを作成中です。経歴については、「About Me」に記載があります。
      </CommonContainer>

      <Card
        titleList={["玉川大学", "工学部エンジニアリングデザイン学科", "インタラクションデザイン研究室"]}
        img="/images/tamagawa.jpg"
        imgType="circle"
        size={108}
        href="/career/tamagawa"
        description={`マイコンを使用したものづくりやインタラクションデザインについて学習しました。\n`}
        periodStart="2021-04-01"
        periodEnd="2025-03-31"
        dateMode="ymd"
      />
    </>
  );
}
