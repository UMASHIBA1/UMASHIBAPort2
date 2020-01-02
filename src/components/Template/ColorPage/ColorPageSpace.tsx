import React, { ReactNode, useState } from "react";
import "../../../css/ColorPage/ColorPageSpace.scss";
import { ColorNames } from "../../../typing/colors";

interface Props {
  children: ReactNode;
  color: ColorNames;
}

const ColorPageSpace: React.FC<Props> = (props: Props) => {
  const [isShowContent, changeIsShowContent] = useState(false);

  const showContent = () => {
    changeIsShowContent(true);
  };

  return (
    <React.Fragment>
      {isShowContent ? (
        <div className={`color-page-space ${props.color}-background`}>
          {props.children}
        </div>
      ) : (
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
      )}
    </React.Fragment>
  );
};

export default ColorPageSpace;
