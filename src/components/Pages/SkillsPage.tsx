import React, { useState } from "react";
import { useHistory } from "react-router";
import skillsData from "../../datas/skillsData";
import ColorPageCloseButton from "../Atomics/ColorPage/ColorPageCloseButton";
import ColorPageTitle from "../Atomics/ColorPage/ColorPageTitle";
import SkillsPageCard from "../Organisms/ColorPage/Skills/SkillsPageCard";
import ColorPageContentSpace from "../Template/ColorPage/ColorPageContentSpace";
import ColorPageSpace from "../Template/ColorPage/ColorPageSpace";
import ColorPageTopSpace from "../Template/ColorPage/ColorPageTopSpace";

const SkillsPage = () => {
  const history = useHistory();
  const [willCloseContent, changeWillCloseContent] = useState(false);
  const [willClosePage, changeWillClosePage] = useState(false);

  const changeWillCloseContentToTrue = () => {
    changeWillCloseContent(true);
  };

  const changeWillClosePageToTrue = () => {
    changeWillClosePage(true);
  };

  const gotoHome = () => {
    history.push("/");
  };

  return (
    <ColorPageSpace
      onClosePageFC={gotoHome}
      isDisappearPage={willClosePage}
      color="orange"
    >
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
            willCollapse={willCloseContent}
            onAnimationEndFC={changeWillClosePageToTrue}
            key={data.title}
            {...data}
          />
        ))}
      </ColorPageContentSpace>
    </ColorPageSpace>
  );
};

export default SkillsPage;
