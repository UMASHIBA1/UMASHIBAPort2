import React from "react";
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

  const gotoSkillsPage = () => {
    history.push("/skills");
  };

  return (
    <ColorPageSpace color="orange">
      <ColorPageTopSpace>
        <TagPageTitle color="orange">{tagName}</TagPageTitle>
        <ColorPageCloseButton
          onClickFC={gotoSkillsPage}
          isTopButton={true}
          color="orange"
        />
      </ColorPageTopSpace>
      <ColorPageContentSpace>
        {skillsData
          .filter(data => {
            return data.tags.some(tag => tag === tagName);
          })
          .map(data => (
            <SkillsPageCard key={data.title} {...data} />
          ))}
      </ColorPageContentSpace>
    </ColorPageSpace>
  );
};

export default SkillsTagPage;
