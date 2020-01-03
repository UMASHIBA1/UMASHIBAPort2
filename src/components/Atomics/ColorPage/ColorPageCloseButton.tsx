import React, { useState } from "react";
import "../../../css/ColorPage/ColorPageCloseButton.scss";
import { ColorNames } from "../../../typing/colors";

interface Props {
  color: ColorNames;
  onClickFC: () => void;
  willCollapse: boolean;
  onAnimationEndFC?: () => void;
}

const ColorPageCloseButton: React.FC<Props> = (props: Props) => {
  const [isHovered, changeIsHovered] = useState(false);

  const setIsHoveredToTrue = () => {
    changeIsHovered(true);
  };

  const setIsHoveredToFalse = () => {
    changeIsHovered(false);
  };

  const classNameAboutColor = isHovered
    ? `white-background deep-${props.color}`
    : `deep-${props.color}-background white`;

  if (props.willCollapse) {
    return (
      <div
        onClick={props.onClickFC}
        onMouseOver={setIsHoveredToTrue}
        onMouseOut={setIsHoveredToFalse}
        className={`${classNameAboutColor} color-page-close-button color-page-close-button-hide`}
      >
        <span>とじる</span>
      </div>
    );
  } else {
    return (
      <div
        onClick={props.onClickFC}
        onMouseOver={setIsHoveredToTrue}
        onMouseOut={setIsHoveredToFalse}
        className={`${classNameAboutColor} color-page-close-button color-page-close-button-show`}
      >
        <span>とじる</span>
      </div>
    );
  }
};

export default ColorPageCloseButton;
