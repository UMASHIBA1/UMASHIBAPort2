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
  const [willClosePage, changeWillClosePage] = useState(false);

  const changeWillclosePageToTrue = () => {
    changeWillClosePage(true);
  };

  const gotoHome = () => {
    history.push("/");
  };

  return (
    <ColorPageSpace color="orange">
      <ColorPageTopSpace>
        <ColorPageTitle willCollapse={willClosePage} titleColor="orange">
          Skills
        </ColorPageTitle>
        <ColorPageCloseButton
          willCollapse={willClosePage}
          onClickFC={changeWillclosePageToTrue}
          isTopButton={true}
          color="orange"
        />
      </ColorPageTopSpace>
      <ColorPageContentSpace>
        {skillsData.map(data => (
          <SkillsPageCard
            willCollapse={willClosePage}
            key={data.title}
            {...data}
          />
        ))}
        <ColorPageCloseButton
          willCollapse={willClosePage}
          onClickFC={changeWillclosePageToTrue}
          isTopButton={false}
          color="orange"
        />
      </ColorPageContentSpace>
    </ColorPageSpace>
  );
};

export default SkillsPage;
