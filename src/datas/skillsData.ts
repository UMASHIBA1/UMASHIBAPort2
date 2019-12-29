export interface SkillsDataType {
  title: string;
  description: string;
  tags: string[];
}
const skillsData: SkillsDataType[] = [
  {
    title: "TypeScript/JavaScript",
    description:
      "多分一番多くの時間触ってる言語です。色んなものを作りながら勉強していきました。2019年7月あたりからTypescriptを使い始めました。特に好きな点はElectronやReactNativeを使ったりすれば色んなプラットフォームでのアプリをこの言語だけで書けるところです。",
    tags: [
      "いちばん好き",
      "いちばん得意",
      "フロントエンド",
      "プログラミング言語"
    ]
  }
];

export default skillsData;
