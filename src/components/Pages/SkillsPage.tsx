import React, { useState } from "react";
import { useHistory } from "react-router";
import skillsData from "../../datas/skillsData";
import { useTypedSelector } from "../../typing/redux/hooks";
import ColorPageAppearAnimation from "../Atomics/ColorPage/ColorPageAppearAnimation";
import ColorPageCloseButton from "../Atomics/ColorPage/ColorPageCloseButton";
import ColorPageDisappearAnimation from "../Atomics/ColorPage/ColorPageDisappearAnimation";
import ColorPageTitle from "../Atomics/ColorPage/ColorPageTitle";
import SkillsPageCard from "../Organisms/ColorPage/Skills/SkillsPageCard";
import ColorPageContentSpace from "../Template/ColorPage/ColorPageContentSpace";
import ColorPageSpace from "../Template/ColorPage/ColorPageSpace";
import ColorPageTopSpace from "../Template/ColorPage/ColorPageTopSpace";

const SkillsPage = () => {
  const history = useHistory();
  const [willCloseContent, changeWillCloseContent] = useState(false);
  const [willClosePage, changeWillClosePage] = useState(false);
  const [isAppearStartAnimation, changeIsAppearStartAnimation] = useState(true);
  const clickedTag = useTypedSelector(
    state => state.skillsPageState.clickedTag
  );

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

  const gotoTagPage = () => {
    history.push(`/skillstag/${clickedTag}`);
  };

  if (isAppearStartAnimation) {
    return (
      <ColorPageAppearAnimation
        color="orange"
        onAnimationEndFC={disappearStartAnimation}
      />
    );
  } else if (willClosePage) {
    return (
      <ColorPageDisappearAnimation
        color="orange"
        onClosePageFC={clickedTag === "" ? gotoHome : gotoTagPage}
      />
    );
  } else {
    return (
      <ColorPageSpace color="orange">
        <ColorPageTopSpace>
          <ColorPageTitle willCollapse={willCloseContent} titleColor="orange">
            Skills
          </ColorPageTitle>
          <ColorPageCloseButton
            willCollapse={willCloseContent}
            onClickFC={changeWillCloseContentToTrue}
            color="orange"
          />
        </ColorPageTopSpace>
        <ColorPageContentSpace>
          {skillsData.map(data => (
            <SkillsPageCard
              willCollapse={willCloseContent || clickedTag !== ""}
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

export default SkillsPage;
