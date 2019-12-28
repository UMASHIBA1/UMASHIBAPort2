import React from "react";
import "../../../css/ColorPage/ColorPageCardTitle.scss";

interface Props {
  children: string;
}

const ColorPageCardTitle: React.FC<Props> = (props: Props) => {
  return <span className="umashiba-page-card-title">{props.children}</span>;
};

export default ColorPageCardTitle;
