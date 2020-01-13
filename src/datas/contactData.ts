export interface ContactDataType {
  title: string;
  content: string;
  url?: string;
}

const contactData: ContactDataType[] = [
  {
    title: "メールアドレス",
    content: "umashiba1#gmail.com\n(#を@に変えてください)"
  },
  {
    title: "Twitter",
    content: "@UMASHIBA",
    url: "https://twitter.com/UMASHIBA"
  },
  {
    title: "GitHub",
    content: "UMASHIBA1",
    url: "https://github.com/UMASHIBA1"
  },
  {
    title: "Qlita",
    content: "@umashiba",
    url: "https://qiita.com/umashiba"
  }
];

export default contactData;
