export interface SkillsDataType {
  title: string;
  description: string;
  tags: string[];
}
const skillsData: SkillsDataType[] = [
  {
    title: "TypeScript/JavaScript",
    description:
      "多分一番多くの時間触ってる言語です。色んなものを作りながら勉強していきました。2019年7月あたりからTypescriptを使い始めました。ElectronやReactNativeを使ったりすれば色んなプラットフォームでコードを共通かさせながら書けるところが好きです。",
    tags: [
      "経験値:3年",
      "いちばん好き",
      "いちばん得意",
      "フロントエンド",
      "プログラミング言語",
    ],
  },
  {
    title: "Python",
    description:
      "初めて触ったプログラミング言語です。データ分析などをする際などによく使用しました。IDLEが使い勝手が良くて好きです。あとライブラリが充実しててその点も大好きです。",
    tags: ["経験値:3年", "プログラミング言語"],
  },
  {
    title: "C",
    description:
      "学校で2019年4月から習い始めました。アルゴリズムやネットワークなどCS系の授業でアルゴリズムなどをC言語で書いています。",
    tags: ["経験値:1年", "プログラミング言語"],
  },
  {
    title: "Rust",
    description:
      "Rustでシンプルなブラウザを作っていたりしました。これから力を入れていきたい言語です。",
    tags: ["経験値:1年", "プログラミング言語"],
  },
  {
    title: "OCaml",
    description: "学校で2020年4月から習い始めました。授業で使ったりしました。",
    tags: ["経験値:1ヶ月", "プログラミング言語"],
  },
  {
    title: "HTML5/CSS3",
    description:
      "ウェブアプリを作成する際使ってます。普段はHTML5/CSS3/Reactで作成しますがペライチのページなどはHTML5/CSS3のみで作成することもあります。CSSでアニメーションを作成するのが楽しくて好きです。",
    tags: ["経験値:3年", "フロントエンド", "マークアップ言語"],
  },
  {
    title: "React",
    description:
      "TypeScriptとの連携が良い点やJSXの書き心地などが好きです。このポートフォリオもReactを使用して作成しました。",
    tags: ["経験値:2年", "フレームワーク", "フロントエンド"],
  },
  {
    title: "ReactNative/Expo",
    description:
      "クリア時間割というアプリのAndroid版を開発する際に使いました。",
    tags: ["経験値:1ヶ月", "フレームワーク", "ネイティブアプリ"],
  },
  {
    title: "Three.js",
    description: "3Dラーメンタイマーというアプリを作成する際に使用しました。",
    tags: ["経験値:1ヶ月", "ライブラリ", "フロントエンド"],
  },
  {
    title: "Storybook",
    description: "コンポーネントをわかりやすく管理したい時やデバッグしたい時などに使います。便利です。",
    tags: ["経験値:1ヶ月", "ライブラリ"]
  },
  {
    title: "Next.js",
    description:
      "インターンシップや個人のプロジェクト等で使っています。このフレームワークに乗っかるだけでさまざまなベストプラクティスが自動で反映されるのがすごいと思っています。",
    tags: ["経験値:2ヶ月", "フレームワーク", "フロントエンド", "バックエンド"],
  },
  {
    title: "Django",
    description:
      "CustVaryというウェブアプリを作った際や学校の課題で使用しました。学校でこれを使ってチーム開発をしたりするのでちょくちょく使います。",
    tags: ["経験値:1年", "フレームワーク", "バックエンド"],
  },
  {
    title: "firebase",
    description:
      "クリア時間割というアプリを開発する際に使いました。バックエンドのコードを書かなくても色んな機能を実装できて、その上バックエンドフレームワークを使うと出てしまうセキュリティの問題によるライブラリの更新等をしなくていいので好きです。",
    tags: ["経験値:2ヶ月", "クラウド", "バックエンド"],
  },
  {
    title: "heroku",
    description:
      "CustVaryというウェブアプリを開発する際にDjangoのデプロイ先として使いました。授業でも使ってます。",
    tags: ["経験値:半年", "インフラ", "バックエンド"],
  },
  {
    title: "Git",
    description:
      "いつもGitを使ってコードを管理しています。便利です。",
    tags: ["経験値:2年半", "ツール"],
  },
  {
    title: "GitHub",
    description:
      "個人開発ではGitHubの方にコードをあげてます。色んな開発環境との連携が強くて好きです。いろんな機能が無料でありがたいなと思っています。",
    tags: ["経験値:2年半", "ツール"],
  },
  {
    title: "GitLab",
    description: "学校での開発ではGitLabを使っています。",
    tags: ["経験値:3ヶ月", "ツール"],
  },
  {
    title: "webpack",
    description:
      "最近使い始めました。今まで面倒くさくてcreate-react-appで済ませちゃってたんですがやっぱりある程度覚えるとカスタマイズできて便利です。3Dラーメンタイマー作る時に使いました。",
    tags: ["経験値:1ヶ月", "ツール", "フロントエンド"],
  },
  {
    title: "VSCode",
    description:
      "VSCodeでいつも開発しています。拡張機能突っ込めばほとんどなんでもあるので重宝しています。",
    tags: ["経験値:2年", "ツール"],
  },
  {
    title: "CLion",
    description: "Rustでコード書くときにこのIDEを使ってます。",
    tags: ["経験値:3ヶ月", "ツール"]
  },
  {
    title: "Adobe Illsutrator",
    description:
      "ロゴや画像などを作る時やウェブアプリのデザインなどをする際に使用します。このポートフォリオもIllustratorでデザインして作りました。",
    tags: ["経験値:半年", "ツール", "デザイン"],
  },
  {
    title: "Adobe XD",
    description:
      "機能重視のアプリなどを作る際に使ったりします。",
    tags: ["経験値:2年", "ツール", "デザイン"],
  },
  {
    title: "figma",
    description: "最近はもっぱらfigmaを使います。人への共有が楽な点やブラウザ上で動かせる点が好きです。",
    tags: ["経験値:半年", "ツール", "デザイン"]
  }
];

export default skillsData;
