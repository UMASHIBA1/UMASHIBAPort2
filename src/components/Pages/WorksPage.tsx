import React from "react";
import ClearTimeTablePhoto from "../../statics/ClearTimeTable.png";
import custvaryPhoto from "../../statics/custvary.png";
import UMASHIBAPort1photo from "../../statics/UMASHIBAPort1.png";
import ColorPageCloseButton from "../Atomics/ColorPage/ColorPageCloseButton";
import ColorPageTitle from "../Atomics/ColorPage/ColorPageTitle";
import WorksPageCard from "../Organisms/ColorPage/Works/WorksPageCard";
import ColorPageContentSpace from "../Template/ColorPage/ColorPageContentSpace";
import ColorPageSpace from "../Template/ColorPage/ColorPageSpace";
import ColorPageTopSpace from "../Template/ColorPage/ColorPageTopSpace";

const WorksPage = () => {
  return (
    <ColorPageSpace color="blue">
      <ColorPageTopSpace>
        <ColorPageTitle titleColor="blue">Works</ColorPageTitle>
        <ColorPageCloseButton isTopButton={true} color="blue" />
      </ColorPageTopSpace>
      <ColorPageContentSpace>
        <WorksPageCard
          title="CustVary"
          description="様々なウェブページに対してコメントや補足紹介などができるサービス。ちなみにこれが初めて作ったウェブサービス。"
          photo={custvaryPhoto}
          photoalt="CustVaryロゴ"
          url="https://www.custvary.com/"
        />
        <WorksPageCard
          title="UMASHIBA Port 1"
          description="UMASHIBA Portの最初のバージョン。折り紙をイメージして作成しました！"
          photo={UMASHIBAPort1photo}
          photoalt="UMASHIBA Port1写真"
          url="https://www.custvary.com/"
        />
        <WorksPageCard
          title="クリア時間割"
          description="AndroidとPC(Web)両方に対応したクラウド同期型の時間割アプリ"
          photo={ClearTimeTablePhoto}
          photoalt="クリア時間割写真"
          url="https://www.custvary.com/"
        />
        <ColorPageCloseButton isTopButton={false} color="blue" />
      </ColorPageContentSpace>
    </ColorPageSpace>
  );
};

export default WorksPage;
