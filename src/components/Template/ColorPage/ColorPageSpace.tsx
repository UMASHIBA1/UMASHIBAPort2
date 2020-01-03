import React, { ReactNode, useState } from "react";
import "../../../css/ColorPage/ColorPageSpace.scss";
import { ColorNames } from "../../../typing/colors";

interface Props {
  children: ReactNode;
  color: ColorNames;
  isDisappearPage: boolean;
  onClosePageFC: () => void;
}

const ColorPageSpace: React.FC<Props> = (props: Props) => {
  const [isShowContent, changeIsShowContent] = useState(false);

  const showContent = () => {
    changeIsShowContent(true);
  };

  if (props.isDisappearPage) {
    // disappear Animation
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
  } else if (isShowContent) {
    // content
    return (
      <div className={`color-page-space ${props.color}-background`}>
        {props.children}
      </div>
    );
  } else {
    // start animation
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
          onAnimationEnd={showContent}
        />
      </div>
    );
  }
};

export default ColorPageSpace;
