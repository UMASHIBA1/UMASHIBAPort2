import React, { ReactNode } from "react";
import "../../../css/ColorPage/ColorPageCard.scss";
import { ColorNames } from "../../../typing/colors";

interface Props {
  children: ReactNode;
  color: ColorNames;
  willCollapse: boolean;
  onDisappearFC?: () => void;
}

const ColorPageCard: React.FC<Props> = (props: Props) => {
  if (props.willCollapse) {
    return (
      <div
        onAnimationEnd={props.onDisappearFC}
        className={`color-page-card-minimum color-page-card deep-${props.color} accent-${props.color}-background`}
      >
        {props.children}
      </div>
    );
  } else {
    return (
      <div
        className={`color-page-card-expand color-page-card deep-${props.color} accent-${props.color}-background`}
      >
        {props.children}
      </div>
    );
  }
};

export default ColorPageCard;
