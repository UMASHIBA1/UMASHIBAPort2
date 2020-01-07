import React from "react";
import "../../../css/ColorPage/ColorPageAppearAnimation.scss";
import { ColorNames } from "../../../typing/colors";

interface Props {
  color: ColorNames;
  onAnimationEndFC: () => void;
}

const ColorPageAppearAnimation: React.FC<Props> = (props: Props) => {
  return (
    <div className={`color-page-appear-animation`}>
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
