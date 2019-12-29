import React from "react";
import skillsData from "../../datas/skillsData";
import ColorPageCloseButton from "../Atomics/ColorPage/ColorPageCloseButton";
import ColorPageTitle from "../Atomics/ColorPage/ColorPageTitle";
import SkillsPageCard from "../Organisms/ColorPage/Skills/SkillsPageCard";
import ColorPageContentSpace from "../Template/ColorPage/ColorPageContentSpace";
import ColorPageSpace from "../Template/ColorPage/ColorPageSpace";
import ColorPageTopSpace from "../Template/ColorPage/ColorPageTopSpace";

const SkillsPage = () => {
  return (
    <ColorPageSpace color="orange">
      <ColorPageTopSpace>
        <ColorPageTitle titleColor="orange">Skills</ColorPageTitle>
        <ColorPageCloseButton isTopButton={true} color="orange" />
      </ColorPageTopSpace>
      <ColorPageContentSpace>
        {skillsData.map(({ title, description, tags }, index) => (
          <SkillsPageCard
            key={index}
            title={title}
            description={description}
            tags={tags}
          />
        ))}
        <ColorPageCloseButton isTopButton={false} color="orange" />
      </ColorPageContentSpace>
    </ColorPageSpace>
  );
};

export default SkillsPage;
