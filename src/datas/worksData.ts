import ThreeDRamenTimer from "../statics/3DRamenTimer.png";
import ClearTimeTablePhoto from "../statics/ClearTimeTable.png";
import custvaryPhoto from "../statics/custvary.png";
import UMASHIBAPort1photo from "../statics/UMASHIBAPort1.png";

export interface WorksDataType {
  title: string;
  description: string;
  photo: string;
  photoalt: string;
  url?: string;
}

const worksData: WorksDataType[] = [
  {
    title: "CustVary[停止済み]",
    description:
      "様々なウェブページに対してコメントや補足紹介などができるサービス。ちなみにこれが初めて作ったウェブサービス。※すでにサービスは停止しています。",
    photo: custvaryPhoto,
    photoalt: "CustVaryロゴ"
  },
  {
    title: "UMASHIBA Port 1",
    description:
      "UMASHIBA Portの最初のバージョン。折り紙をイメージして作成しました！",
    photo: UMASHIBAPort1photo,
    photoalt: "UMASHIBA Port1写真",
    url: "https://portfolio.umashiba.dev"
  },
  {
    title: "クリア時間割",
    description: "AndroidとPC(Web)両方に対応したクラウド同期型の時間割アプリ",
    photo: ClearTimeTablePhoto,
    photoalt: "クリア時間割写真",
    url: "https://cleartimetable.umashiba.dev/landing-page/"
  },
  {
    title: "3Dラーメンタイマー",
    description:
      "Three.jsで作成したラーメンタイマーです。PWA対応なのでオフラインでも使えます！",
    photo: ThreeDRamenTimer,
    photoalt: "3Dラーメンタイマー写真",
    url: "https://3d-ramen-timer.umashiba.dev/"
  }
];

export default worksData;
