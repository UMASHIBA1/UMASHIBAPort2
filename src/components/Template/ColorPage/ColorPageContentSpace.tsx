import React, { ReactNode } from "react";
import "../../../css/ColorPage/ColorPageContentSpace.scss";

interface Props {
  children: ReactNode;
}

const ColorPageContentSpace: React.FC<Props> = (props: Props) => {
  return <div className="color-page-content-space">{props.children}</div>;
};

export default ColorPageContentSpace;
