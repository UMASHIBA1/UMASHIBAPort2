import React, { ReactNode } from "react";
import "../../../css/Home/ColorfulBackground.scss";

interface Props {
  children: ReactNode;
}

const ColorfulBackground: React.FC<Props> = (props: Props) => {
  return <div id="colorful-background">{props.children}</div>;
};

export default ColorfulBackground;
