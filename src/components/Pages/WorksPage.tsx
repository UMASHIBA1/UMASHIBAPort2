import React, { useState } from "react";
import { useHistory } from "react-router";
import worksData from "../../datas/worksData";
import ColorPageAppearAnimation from "../Atomics/ColorPage/ColorPageAppearAnimation";
import ColorPageCloseButton from "../Atomics/ColorPage/ColorPageCloseButton";
import ColorPageDisappearAnimation from "../Atomics/ColorPage/ColorPageDisappearAnimation";
import ColorPageTitle from "../Atomics/ColorPage/ColorPageTitle";
import WorksPageCard from "../Organisms/ColorPage/Works/WorksPageCard";
import ColorPageContentSpace from "../Template/ColorPage/ColorPageContentSpace";
import ColorPageSpace from "../Template/ColorPage/ColorPageSpace";
import ColorPageTopSpace from "../Template/ColorPage/ColorPageTopSpace";

const WorksPage = () => {
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
        color="blue"
        onAnimationEndFC={disappearStartAnimation}
      />
    );
  } else if (willClosePage) {
    return (
      <ColorPageDisappearAnimation color="blue" onClosePageFC={gotoHome} />
    );
  } else {
    return (
      <ColorPageSpace color="blue">
        <ColorPageTopSpace>
          <ColorPageTitle willCollapse={willCloseContent} titleColor="blue">
            Works
          </ColorPageTitle>
          <ColorPageCloseButton
            willCollapse={willCloseContent}
            onClickFC={changeWillCloseContentToTrue}
            color="blue"
          />
        </ColorPageTopSpace>
        <ColorPageContentSpace>
          {worksData.map(data => (
            <WorksPageCard
              willCollapse={willCloseContent}
              onDisappearFC={changeWillClosePageToTrue}
              key={data.title}
              {...data}
            />
          ))}
        </ColorPageContentSpace>
      </ColorPageSpace>
    );
  }
};

export default WorksPage;
