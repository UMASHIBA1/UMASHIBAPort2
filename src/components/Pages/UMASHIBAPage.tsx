import React from "react";
import ColorPageCloseButton from "../Atomics/ColorPage/ColorPageCloseButton";
import ColorPageTitle from "../Atomics/ColorPage/ColorPageTitle";
import UMASHIBAPageCard from "../Organisms/ColorPage/UMASHIBA/UMASHIBAPageCard";
import ColorPageTopSpace from "../Template/ColorfulPage/ColorPageTopSpace";

const UMASHIBAPage = () => {
  const text1 =
    "私「ドゥオ、ドゥオ、ヴォロロロロ...!!」\nメイ「あなたトトロっていうのね!」\n\n ......ごめんなさい、ふざけました。\nざんねんなことに私はトトロではありません。ただの大学生です。UMASHIBAって名前で時たまウェブ サービスとか作ったりしてます。フロントエンドが好きでいつも楽しみ ながら色んなもの作ってます。皆さんどうぞよろしくお願いします。";
  const text2 =
    "今まで主にウェブサービスやアプリを作ってました。今年の夏には株式会社ARISE Analyticsさんのところで3週間ほどインターンシップに参加させていただいてリアルのデータを使ったデータ分析について勉強しました。お世話になった皆さんありがとうございました！";

  const text3 =
    "IT企業でバイトして技術についてもっと学びたいなと考えています。あと最近ブラウザより低レイヤーのところ触りたい欲求がすごいのでウェブへの理解を深める為にも単純なブラウザとか作れたらな~なんてことを思っています。";
  return (
    <div
      className="pink-background"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "20px"
      }}
    >
      {/* <ColorPageTopSpace>
        <ColorPageTitle titleColor="pink">UMASHIBA</ColorPageTitle>
        <ColorPageCloseButton color="pink" />
      </ColorPageTopSpace> */}
      <div style={{ height: "auto", width: "90%" }}>
        <UMASHIBAPageCard title="「あなたはだぁれ？」">
          {text1}
        </UMASHIBAPageCard>
      </div>
      <div style={{ height: "auto", width: "90%" }}>
        <UMASHIBAPageCard title="「今までやってきたことは？」">
          {text2}
        </UMASHIBAPageCard>
      </div>
      <div style={{ height: "auto", width: "90%" }}>
        <UMASHIBAPageCard title="「これからやりたいことは？」">
          {text3}
        </UMASHIBAPageCard>
      </div>
      {/* <div style={{ width: "400px", height: "300px" }}>
        <ColorPageCard color="pink">
          <span style={{ color: "#ffffff" }}>どうだろうか</span>
        </ColorPageCard>
      </div> */}
    </div>
  );
};

export default UMASHIBAPage;
