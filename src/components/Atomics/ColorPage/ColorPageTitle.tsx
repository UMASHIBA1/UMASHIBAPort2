import React from "react";
import "../../../css/ColorPage/ColorPageTitle.scss";
import { ColorNames } from "../../../typing/colors";

interface Props {
  children: string;
  titleColor: ColorNames;
  willCollapse: boolean;
  onAnimationEndFC?: () => void;
}

const ColorPageTitle: React.FC<Props> = (props: Props) => {
  if (props.willCollapse) {
    return (
      <div
        onAnimationEnd={props.onAnimationEndFC}
        className={`color-page-title deep-${props.titleColor} minimum-color-page-title`}
      >
        <span className={`${props.titleColor}`}>{props.children}</span>
      </div>
    );
  } else {
    return (
      <div
        onAnimationEnd={props.onAnimationEndFC}
        className={`color-page-title deep-${props.titleColor} expand-color-page-title`}
      >
        <span className={`${props.titleColor}`}>{props.children}</span>
      </div>
    );
  }
};

export default ColorPageTitle;
