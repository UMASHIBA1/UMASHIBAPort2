import React, { useState } from "react";
import "../../../css/ColorPage/ColorPageCloseButton.scss";
import { ColorNames } from "../../../typing/colors";

interface Props {
  color: ColorNames;
  isTopButton: boolean;
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

  const classNameAboutLocation = props.isTopButton
    ? "color-page-top-close-button"
    : "color-page-bottom-close-button";

  return (
    <div
      onMouseOver={setIsHoveredToTrue}
      onMouseOut={setIsHoveredToFalse}
      className={`${classNameAboutColor} ${classNameAboutLocation}`}
    >
      <span>とじる</span>
    </div>
  );
};

export default ColorPageCloseButton;
