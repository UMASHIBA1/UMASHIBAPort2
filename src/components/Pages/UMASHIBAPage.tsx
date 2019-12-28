import React from "react";
import ColorPageCloseButton from "../Atomics/ColorPage/ColorPageCloseButton";
import ColorPageTitle from "../Atomics/ColorPage/ColorPageTitle";
import UMASHIBAPageCard from "../Organisms/ColorPage/UMASHIBA/UMASHIBAPageCard";
import ColorPageContentSpace from "../Template/ColorPage/ColorPageContentSpace";
import ColorPageSpace from "../Template/ColorPage/ColorPageSpace";
import ColorPageTopSpace from "../Template/ColorPage/ColorPageTopSpace";

const UMASHIBAPage = () => {
  const text1 =
    "私「ドゥオ、ドゥオ、ヴォロロロロ...!!」\nメイ「あなたトトロっていうのね!」\n\n ......ごめんなさい、ふざけました。\nざんねんなことに私はトトロではありません。ただの大学生です。UMASHIBAって名前で時たまウェブサービスとか作ったりしてます。フロントエンドが好きでいつも楽しみながら色んなもの作ってます。皆さんどうぞよろしくお願いします。";
  const text2 =
    "今まで主にウェブサービスやアプリを作ってました。今年の夏には株式会社ARISE Analyticsさんのところで3週間ほどインターンシップに参加させていただいてリアルのデータを使ったデータ分析について勉強しました。お世話になった皆さんありがとうございました！";

  const text3 =
    "IT企業でバイトして技術についてもっと学びたいなと考えています。あと最近ブラウザより低レイヤーのところ触りたい欲求がすごいのでウェブへの理解を深める為にも単純なブラウザとか作れたらな~なんてことを思っています。";
  return (
    <ColorPageSpace color="pink">
      <ColorPageTopSpace>
        <ColorPageTitle titleColor="pink">UMASHIBA</ColorPageTitle>
        <ColorPageCloseButton isTopButton={true} color="pink" />
      </ColorPageTopSpace>
      <ColorPageContentSpace>
        <UMASHIBAPageCard title="「あなたはだぁれ？」">
          {text1}
        </UMASHIBAPageCard>
        <UMASHIBAPageCard title="「今までやってきたことは？」">
          {text2}
        </UMASHIBAPageCard>
        <UMASHIBAPageCard title="「これからやりたいことは？」">
          {text3}
        </UMASHIBAPageCard>
        <ColorPageCloseButton isTopButton={false} color="pink" />
      </ColorPageContentSpace>
    </ColorPageSpace>
  );
};

export default UMASHIBAPage;
