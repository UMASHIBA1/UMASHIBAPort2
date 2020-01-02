import React, { useState } from "react";
import "../../../css/Home/HomeDisappearAnimation.scss";
import { ColorNames } from "../../../typing/colors";

interface Props {
  isStartAnimation: boolean;
  animationEndFC: () => void;
  color: ColorNames;
}

const HomeDisappearAnimation: React.FC<Props> = (props: Props) => {
  const [isStartToWhiteAnimation, changeIsStartToWhiteAnimation] = useState(
    false
  );
  const [isShowHideAnimation, changeIsShowHideAnimation] = useState(true);

  const startToWhiteAnimation = () => {
    changeIsStartToWhiteAnimation(true);
    changeIsShowHideAnimation(false);
  };

  return (
    <React.Fragment>
      {/* hide animation */}
      {props.isStartAnimation && isShowHideAnimation ? (
        <div className="umashiba-port-area-animation umashiba-port-area-hide-animation">
          <div className={`accent-${props.color}-background`} />
          <div className={`${props.color}-background`} />
          <div className={`deep-${props.color}-background`} />
          <div className={`accent-${props.color}-background`} />
          <div className={`${props.color}-background`} />
          <div className={`deep-${props.color}-background`} />
          <div className={`accent-${props.color}-background`} />
          <div className={`deep-${props.color}-background`} />
          <div className={`${props.color}-background`} />
          <div
            className={`accent-${props.color}-background`}
            onAnimationEnd={startToWhiteAnimation}
          />
        </div>
      ) : null}
      {/* to white animation */}
      {isStartToWhiteAnimation ? (
        <div className="umashiba-port-area-animation umashiba-port-area-to-white-screen-animation">
          <div className={`accent-${props.color}-background`} />
          <div className={`${props.color}-background`} />
          <div className={`deep-${props.color}-background`} />
          <div className={`accent-${props.color}-background`} />
          <div className={`${props.color}-background`} />
          <div className={`deep-${props.color}-background`} />
          <div className={`accent-${props.color}-background`} />
          <div className={`deep-${props.color}-background`} />
          <div className={`${props.color}-background`} />
          <div
            className={`accent-${props.color}-background`}
            onAnimationEnd={props.animationEndFC}
          />
          <div className="white-background" />
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default HomeDisappearAnimation;
