import React from "react";
import "../../../../css/ColorPage/UMASHIBA/UMASHIBAPageCardTitle.scss";

interface Props {
  children: string;
}

const UMASHIBAPageCardTitle: React.FC<Props> = (props: Props) => {
  return <span className="umashiba-page-card-title">{props.children}</span>;
};

export default UMASHIBAPageCardTitle;
