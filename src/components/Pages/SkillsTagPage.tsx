import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import skillsData from "../../datas/skillsData";
import ColorPageCloseButton from "../Atomics/ColorPage/ColorPageCloseButton";
import TagPageTitle from "../Atomics/ColorPage/TagPageTitle";
import SkillsPageCard from "../Organisms/ColorPage/Skills/SkillsPageCard";
import ColorPageContentSpace from "../Template/ColorPage/ColorPageContentSpace";
import ColorPageSpace from "../Template/ColorPage/ColorPageSpace";
import ColorPageTopSpace from "../Template/ColorPage/ColorPageTopSpace";

const SkillsTagPage: React.FC = () => {
  const history = useHistory();
  const { tagName = "" } = useParams();
  const [willCloseContent, changeWillCloseContent] = useState(false);
  const [willClosePage, changeWillClosePage] = useState(false);

  const changeWillcloseContentToTrue = () => {
    changeWillCloseContent(true);
  };

  const changeWillClosePageToTrue = () => {
    changeWillClosePage(true);
  };

  const gotoSkillsPage = () => {
    history.push("/skills");
  };

  return (
    <ColorPageSpace
      onClosePageFC={gotoSkillsPage}
      isDisappearPage={willClosePage}
      color="orange"
    >
      <ColorPageTopSpace>
        <TagPageTitle color="orange">{tagName}</TagPageTitle>
        <ColorPageCloseButton
          willCollapse={willCloseContent}
          onClickFC={gotoSkillsPage}
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
              willCollapse={willCloseContent}
              key={data.title}
              {...data}
            />
          ))}
      </ColorPageContentSpace>
    </ColorPageSpace>
  );
};

export default SkillsTagPage;
