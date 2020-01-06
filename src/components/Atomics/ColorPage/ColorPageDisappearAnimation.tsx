import React from "react";
import { ColorNames } from "../../../typing/colors";

interface Props {
  color: ColorNames;
  onClosePageFC: () => void;
}

const ColorPageDisappearAnimation: React.FC<Props> = (props: Props) => {
  return (
    <div className={`color-page-disappear-animation white-background`}>
      <div className={`${props.color}-background`} />
      <div className={`deep-${props.color}-background`} />
      <div
        onAnimationEnd={props.onClosePageFC}
        className={`accent-${props.color}-background`}
      />
    </div>
  );
};

export default ColorPageDisappearAnimation;
