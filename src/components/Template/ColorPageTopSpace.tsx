import React, { ReactNode } from "react";
import "../../css/ColorPage/ColorPageTopSpace.scss";

interface Props {
  children: ReactNode;
}

const ColorPageTopSpace: React.FC<Props> = (props: Props) => {
  return <div className="color-page-top-space">{props.children}</div>;
};

export default ColorPageTopSpace;
