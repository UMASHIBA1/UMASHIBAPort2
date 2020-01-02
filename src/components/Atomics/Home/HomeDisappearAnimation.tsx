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

  const startToWhiteAnimation = () => {
    changeIsStartToWhiteAnimation(true);
  };

  return (
    <React.Fragment>
      {props.isStartAnimation ? (
        <div className="umashiba-port-area-animation umashiba-port-area-hide-animation">
          <div className={`${props.color}-background`} />
          <div className={`${props.color}-background`} />
          <div className={`${props.color}-background`} />
          <div
            className={`${props.color}-background`}
            onAnimationEnd={startToWhiteAnimation}
          />
        </div>
      ) : null}
      {isStartToWhiteAnimation ? (
        <div className="umashiba-port-area-animation umashiba-port-area-to-white-screen-animation">
          <div className={`${props.color}-background`} />
          <div className={`${props.color}-background`} />
          <div className={`${props.color}-background`} />
          <div
            className={`${props.color}-background`}
            onAnimationEnd={props.animationEndFC}
          />
          <div className="white-background" />
        </div>
      ) : null}
    </React.Fragment>
  );
};

export default HomeDisappearAnimation;
