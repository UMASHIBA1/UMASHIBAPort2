import React from "react";
import ColorPageCloseButton from "../Atomics/ColorPage/ColorPageCloseButton";
import ColorPageTitle from "../Atomics/ColorPage/ColorPageTitle";
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
      <ColorPageContentSpace>adfaodifhdjio</ColorPageContentSpace>
    </ColorPageSpace>
  );
};

export default SkillsPage;
