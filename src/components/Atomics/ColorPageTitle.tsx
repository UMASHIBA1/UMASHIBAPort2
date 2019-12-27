import React from "react";
import "../../css/ColorPage/ColorPageTitle.scss";
import { ColorNames } from "../../typing/colors";

interface Props {
  children: string;
  titleColor: ColorNames;
}

const ColorPageTitle: React.FC<Props> = (props: Props) => {
  return (
    <div className={`color-page-title deep-${props.titleColor}`}>
      <span className={`${props.titleColor}`}>{props.children}</span>
    </div>
  );
};

export default ColorPageTitle;
