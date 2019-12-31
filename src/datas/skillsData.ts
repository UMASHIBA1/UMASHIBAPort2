export interface SkillsDataType {
  title: string;
  description: string;
  tags: string[];
}
const skillsData: SkillsDataType[] = [
  {
    title: "TypeScript/JavaScript",
    description:
      "多分一番多くの時間触ってる言語です。色んなものを作りながら勉強していきました。2019年7月あたりからTypescriptを使い始めました。ElectronやReactNativeを使ったりすれば色んなプラットフォームでのアプリをこの言語だけで開発できるところが好きです。",
    tags: [
      "経験値:1年半",
      "いちばん好き",
      "いちばん得意",
      "フロントエンド",
      "プログラミング言語"
    ]
  },
  {
    title: "Python",
    description:
      "初めて触ったプログラミング言語です。データ分析などをする際などによく使用しました。IDLEが使い勝手が良くて好きです。あとライブラリが充実しててその点も大好きです。",
    tags: ["経験値:1年半", "プログラミング言語"]
  },
  {
    title: "C言語",
    description:
      "学校で2019年4月から習い始めました。アルゴリズムやネットワークなどCS系の授業でアルゴリズムなどをC言語で書いています。\nポインタの理解が鬼門でした...。",
    tags: ["経験値:8ヶ月", "プログラミング言語"]
  },
  {
    title: "HTML5/CSS3",
    description:
      "ウェブアプリを作成する際使ってます。普段はHTML5/CSS3/Reactで作成しますがペライチのページなどはHTML5/CSS3のみで作成することもあります。CSSでアニメーションを作成するのが楽しくて好きです。",
    tags: ["経験値:1年半", "フロントエンド", "マークアップ言語"]
  },
  {
    title: "React",
    description:
      "最近作成したウェブアプリやウェブページはほとんどReactで作ってます。エコシステムが充実していて素のHTML/CSS/Javascriptより分かりやすくコードがかけるので好きです。このポートフォリオもReactを使用して作成しました。",
    tags: ["経験値:半年", "フレームワーク", "フロントエンド"]
  },
  {
    title: "ReactNative/Expo",
    description:
      "クリア時間割というアプリのAndroid版を開発する際に使いました。Reactと同じ書き方でネイティブアプリ作れるのすごいですよね！",
    tags: ["経験値:1ヶ月", "フレームワーク", "ネイティブアプリ"]
  },
  {
    title: "Django",
    description:
      "CustVaryというウェブアプリを作った際や学校の課題で使用しました。学校でこれを使ってチーム開発をしたりするのでちょくちょく使います。",
    tags: ["経験値:半年", "フレームワーク", "バックエンド"]
  },
  {
    title: "firebase",
    description:
      "クリア時間割というアプリを開発する際に使いました。使い始めたのは結構最近です。バックエンドのコードを書かなくても色んな機能を実装できて、初めて使った時はその便利さに感動しました。",
    tags: ["経験値:2ヶ月", "クラウド", "バックエンド"]
  },
  {
    title: "heroku",
    description:
      "CustVaryというウェブアプリを開発する際にDjangoのデプロイ先として使いました。最近授業でも使ってます。",
    tags: ["経験値:2ヶ月", "インフラ", "バックエンド"]
  },
  {
    title: "Git",
    description:
      "いつもGitを使ってコードを管理しています。最近、学生はGitKrakenが無料で使える事に気づいてそちらで操作するようになりました。GUIで操作できるの便利ですね～。チームで開発した際はブランチ切ったりしましたが個人での開発では大体masterに投げてしまっています...。",
    tags: ["経験値:1年", "ツール"]
  },
  {
    title: "GitHub",
    description:
      "個人開発ではGitHubの方にコードをあげてます。色んな開発環境との連携が強くて好きです。GitHub Actionsをそのうち使ってみたいなーと思っています。",
    tags: ["経験値:1年", "ツール"]
  },
  {
    title: "GitLab",
    description: "学校での開発ではGitLabを使っています。",
    tags: ["経験値:3ヶ月", "ツール"]
  },
  {
    title: "VSCode",
    description:
      "VSCodeでいつも開発しています。拡張機能突っ込めばほとんどなんでもあるので重宝しています。",
    tags: ["経験値:1年半", "ツール"]
  },
  {
    title: "Adobe Illsutrator",
    description:
      "ロゴや画像などを作る時やウェブアプリのデザインなどをする際に使用します。このポートフォリオもIllustratorでデザインして作りました。",
    tags: ["経験値:2ヶ月", "ツール", "デザイン"]
  },
  {
    title: "Adobe XD",
    description:
      "機能重視のアプリなどを作る際はこっちを使用します。ただ実際のところIllustratorとの使い分けは結構テキトーです...。",
    tags: ["経験値:1年", "ツール", "デザイン"]
  },
  {
    title: "PySpark/DataBricks",
    description:
      "ARISE Analyticsさんのところでインターシップに参加させていただいた際に使いました。メモリ上で収まりきらないようなビッグデータを扱えたのがとても楽しかったですし勉強になりました。",
    tags: ["経験値:3週間", "データ分析"]
  },
  {
    title: "AutoDesk Fusion360",
    description:
      "ITとは関係ないですがFusion360というCADを触ったりします。趣味です...",
    tags: ["ツール", "趣味"]
  }
];

export default skillsData;
