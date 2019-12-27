import React, { useState } from "react";
import "../../css/ColorPage/ColorPageCloseButton.scss";
import { ColorNames } from "../../typing/colors";

interface Props {
  color: ColorNames;
}

const ColorPageCloseButton: React.FC<Props> = (props: Props) => {
  const [isHovered, changeIsHovered] = useState(false);

  const setIsHoveredToTrue = () => {
    changeIsHovered(true);
  };

  const setIsHoveredToFalse = () => {
    changeIsHovered(false);
  };

  const className = isHovered
    ? "white-background deep-pink"
    : "deep-pink-background white";

  return (
    <div
      onMouseOver={setIsHoveredToTrue}
      onMouseOut={setIsHoveredToFalse}
      className={`${className} color-page-close-button`}
    >
      <span>とじる</span>
    </div>
  );
};

export default ColorPageCloseButton;
