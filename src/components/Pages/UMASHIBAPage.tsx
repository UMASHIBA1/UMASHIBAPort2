import React, { useState } from "react";
import { useHistory } from "react-router";
import umashibaData from "../../datas/umashibaData";
import ColorPageAppearAnimation from "../Atomics/ColorPage/ColorPageAppearAnimation";
import ColorPageCloseButton from "../Atomics/ColorPage/ColorPageCloseButton";
import ColorPageDisappearAnimation from "../Atomics/ColorPage/ColorPageDisappearAnimation";
import ColorPageTitle from "../Atomics/ColorPage/ColorPageTitle";
import UMASHIBAPageCard from "../Organisms/ColorPage/UMASHIBA/UMASHIBAPageCard";
import ColorPageContentSpace from "../Template/ColorPage/ColorPageContentSpace";
import ColorPageSpace from "../Template/ColorPage/ColorPageSpace";
import ColorPageTopSpace from "../Template/ColorPage/ColorPageTopSpace";

const UMASHIBAPage = () => {
  const history = useHistory();
  const [willCloseContent, changeWillCloseContent] = useState(false);
  const [willClosePage, changeWillClosePage] = useState(false);
  const [isAppearStartAnimation, changeIsAppearStartAnimation] = useState(true);

  const changeWillCloseContentToTrue = () => {
    changeWillCloseContent(true);
  };

  const changeWillClosePageToTrue = () => {
    changeWillClosePage(true);
  };

  const disappearStartAnimation = () => {
    changeIsAppearStartAnimation(false);
  };

  const gotoHome = () => {
    history.push("/");
  };

  if (isAppearStartAnimation) {
    return (
      <ColorPageAppearAnimation
        color="pink"
        onAnimationEndFC={disappearStartAnimation}
      />
    );
  } else if (willClosePage) {
    return (
      <ColorPageDisappearAnimation color="pink" onClosePageFC={gotoHome} />
    );
  } else {
    return (
      <ColorPageSpace color="pink">
        <ColorPageTopSpace>
          <ColorPageTitle willCollapse={willCloseContent} titleColor="pink">
            UMASHIBA
          </ColorPageTitle>
          <ColorPageCloseButton
            willCollapse={willCloseContent}
            onClickFC={changeWillCloseContentToTrue}
            color="pink"
          />
        </ColorPageTopSpace>
        <ColorPageContentSpace>
          {umashibaData.map(data => (
            <UMASHIBAPageCard
              onDisappearFC={changeWillClosePageToTrue}
              willCollapse={willCloseContent}
              key={data.title}
              title={data.title}
            >
              {data.content}
            </UMASHIBAPageCard>
          ))}
        </ColorPageContentSpace>
      </ColorPageSpace>
    );
  }
};

export default UMASHIBAPage;
