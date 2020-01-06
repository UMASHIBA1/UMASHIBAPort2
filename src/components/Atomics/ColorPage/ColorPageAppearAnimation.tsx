import React, { ReactNode } from "react";
import { ColorNames } from "../../../typing/colors";

interface Props {
  color: ColorNames;
  onAnimationEndFC: () => void;
}

const ColorPageAppearAnimation: React.FC<Props> = (props: Props) => {
  return (
    <div className={`color-page-space-animation`}>
      <div className={`${props.color}-background`} />
      <div className={`${props.color}-background`} />
      <div className={`${props.color}-background`} />
      <div className={`${props.color}-background`} />
      <div className={`${props.color}-background`} />
      <div className={`${props.color}-background`} />
      <div className={`${props.color}-background`} />
      <div className={`${props.color}-background`} />
      <div className={`${props.color}-background`} />
      <div
        className={`${props.color}-background`}
        onAnimationEnd={props.onAnimationEndFC}
      />
    </div>
  );
};

export default ColorPageAppearAnimation;
