import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router";
import skillsData from "../../datas/skillsData";
import { CHANGE_CLICKED_TAG } from "../../redux/constants/skillsPageTypes";
import { DispatchType } from "../../redux/store";
import { useTypedSelector } from "../../typing/redux/hooks";
import ColorPageAppearAnimation from "../Atomics/ColorPage/ColorPageAppearAnimation";
import ColorPageCloseButton from "../Atomics/ColorPage/ColorPageCloseButton";
import ColorPageDisappearAnimation from "../Atomics/ColorPage/ColorPageDisappearAnimation";
import TagPageTitle from "../Atomics/ColorPage/TagPageTitle";
import SkillsPageCard from "../Organisms/ColorPage/Skills/SkillsPageCard";
import ColorPageContentSpace from "../Template/ColorPage/ColorPageContentSpace";
import ColorPageSpace from "../Template/ColorPage/ColorPageSpace";
import ColorPageTopSpace from "../Template/ColorPage/ColorPageTopSpace";

const SkillsTagPage: React.FC = () => {
  const history = useHistory();
  const { tagName = "" } = useParams<{tagName: string}>();
  const [willCloseContent, changeWillCloseContent] = useState(false);
  const [willClosePage, changeWillClosePage] = useState(false);
  const [isAppearStartAnimation, changeIsAppearStartAnimation] = useState(true);
  const dispatch: DispatchType = useDispatch();
  const clickedTag = useTypedSelector(
    state => state.skillsPageState.clickedTag
  );
  const [isInitialRender, changeIsInitialRender] = useState(true);

  if (isInitialRender) {
    dispatch({ type: CHANGE_CLICKED_TAG, payload: "" });
    changeIsInitialRender(false);
  }

  const resetAllState = () => {
    changeWillCloseContent(false);
    changeWillClosePage(false);
    changeIsAppearStartAnimation(true);
    changeIsInitialRender(true);
  };

  const changeWillcloseContentToTrue = () => {
    changeWillCloseContent(true);
  };

  const changeWillClosePageToTrue = () => {
    changeWillClosePage(true);
  };

  const disappearStartAnimation = () => {
    changeIsAppearStartAnimation(false);
  };

  const gotoSkillsPage = () => {
    history.push("/skills");
  };

  const gotoNewSkillsTagPage = () => {
    resetAllState();
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
        onClosePageFC={
          clickedTag !== "" ? gotoNewSkillsTagPage : gotoSkillsPage
        }
      />
    );
  } else {
    return (
      <ColorPageSpace color="orange">
        <ColorPageTopSpace>
          <TagPageTitle willCollapse={willCloseContent} color="orange">
            {tagName}
          </TagPageTitle>
          <ColorPageCloseButton
            willCollapse={willCloseContent}
            onClickFC={changeWillcloseContentToTrue}
            color="orange"
          />
        </ColorPageTopSpace>
        <ColorPageContentSpace>
          {skillsData
            .filter(data => {
              return data.tags.some(tag => tag === tagName);
            })
            .map(data => (
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

export default SkillsTagPage;
