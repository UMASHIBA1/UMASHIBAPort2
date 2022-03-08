import ThreeDRamenTimer from "../statics/3DRamenTimer.png";
import ClearTimeTablePhoto from "../statics/ClearTimeTable.png";
import custvaryPhoto from "../statics/custvary.png";
import UMASHIBAPort1photo from "../statics/UMASHIBAPort1.png";
import UMASHIBAVirtualDOM from "../statics/UMASHIBAVirtualDOM.png";
import UMASHIBAPort2Photo from "../statics/UMASHIBAPort2.png";
import GCAPhoto from "../statics/GCA.png";
import INIADFesTeaserSitePhoto from "../statics/iniad-fes-teaser-site.png";
import INIADFesVenueSitePhoto from "../statics/iniad-fes-venue.png";
import CSSAnimationInternshipPhoto from "../statics/cssAnimationInternship.png";
import JobnicationPhoto from "../statics/jobnication.jpg";
import VioletPhoto from "../statics/violet.png";


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
    photoalt: "CustVaryロゴ",
  },
  {
    title: "UMASHIBA Port 1",
    description:
      "UMASHIBA Portの最初のバージョン。折り紙をイメージして作成しました！",
    photo: UMASHIBAPort1photo,
    photoalt: "UMASHIBA Port1写真",
    url: "https://portfolio.umashiba.dev",
  },
  {
    title: "クリア時間割",
    description: "AndroidとPC(Web)両方に対応したクラウド同期型の時間割アプリ",
    photo: ClearTimeTablePhoto,
    photoalt: "クリア時間割写真",
  },
  {
    title: "UMASHIBAPort2",
    description: "このサイトです。CSSアニメーションを重視して作成しました。",
    photo: UMASHIBAPort2Photo,
    photoalt: "UMASHIBAPort2写真",
    url: "https://umashiba.dev/",
  },
  {
    title: "GCA[非公開]",
    description:
      "学校のチーム演習で作成したSlackアプリです。Slack上でGoogleカレンダーの閲覧、予定作成、削除、変更ができるようにしました。私は閲覧機能を担当しました。",
    photo: GCAPhoto,
    photoalt: "GCA写真",
  },
  {
    title: "3Dラーメンタイマー",
    description:
      "Three.jsで作成したラーメンタイマーです。PWA対応なのでオフラインでも使えます！",
    photo: ThreeDRamenTimer,
    photoalt: "3Dラーメンタイマー写真",
    url: "https://3d-ramen-timer.umashiba.dev/",
  },
  {
    title: "UMASHIBAVirtualDOM",
    description:
      "勉強の為に仮想DOMを実装してみました。これを自作することで今まで使っていたReact等のフロントエンドフレームワークへの理解を深めることができました。",
    photo: UMASHIBAVirtualDOM,
    photoalt: "UMASHIBAVirtualDOM写真",
    url: "https://github.com/UMASHIBA1/UMASHIBAVirtualDOM",
  },
  {
    title: "CSSアニメーションインターンシップ最終成果物",
    description: "pixivのCSSアニメーションインターンシップで作った最終成果物です。とてもきれいなウェブサイトに仕上がりました！",
    photo: CSSAnimationInternshipPhoto,
    photoalt: "CSS アニメーションインターンシップ最終成果物画像",
    url: "https://css-animation-intern.netlify.app/"
  },
  {
    title: "INIAD-FES ティザーサイト2020",
    description:
      "私の通っている学部のオンライン学園祭のティザーサイトを作成させてもらいました。ニューモフィズムとCSSアニメーションを合わせた楽しいサイトになりました。",
    photo: INIADFesTeaserSitePhoto,
    photoalt: "INIAD-FES ティザーサイト写真",
    url: "https://teaser-site2020.vercel.app/",
  },
  {
    title: "INIAD-FES 会場サイト",
    description: "私の通っている学部のオンライン学園祭のバーチャルキャンパスを作成させてもらいました。",
    photo: INIADFesVenueSitePhoto,
    photoalt: "INIAD-FES 会場サイト",
    url: "https://github.com/UMASHIBA1/iniad-fes-online-2020-venue"
  },
  {
    title: "jobnication",
    description: "学校の演習で作ったアプリです。バックエンドを担当しました。",
    photo: JobnicationPhoto,
    photoalt: "jobnication 写真",
  },
  {
    title: "violet",
    description: "Webフロントエンドへの理解を深めるために作ったシンプルなブラウザです。これを作成したことでブラウザのレンダリングについてある程度しっかりと理解できました。",
    photo: VioletPhoto,
    photoalt: "violet　写真",
    url: "https://github.com/UMASHIBA1/violet"
  }
];

export default worksData;
