import React from "react";
import "../../../../css/ColorPage/UMASHIBA/UMASHIBAPageCardContent.scss";

interface Props {
  children: string;
}

const UMASHIBAPageCardContent: React.FC<Props> = (props: Props) => {
  return <div className="umashiba-page-card-content">{props.children}</div>;
};

export default UMASHIBAPageCardContent;
