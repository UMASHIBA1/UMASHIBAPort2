import React from "react";
import ColorPageCloseButton from "../Atomics/ColorPage/ColorPageCloseButton";
import ColorPageTitle from "../Atomics/ColorPage/ColorPageTitle";
import ColorPageContentSpace from "../Template/ColorPage/ColorPageContentSpace";
import ColorPageSpace from "../Template/ColorPage/ColorPageSpace";
import ColorPageTopSpace from "../Template/ColorPage/ColorPageTopSpace";

const WorksPage = () => {
  return (
    <ColorPageSpace color="blue">
      <ColorPageTopSpace>
        <ColorPageTitle titleColor="blue">Works</ColorPageTitle>
        <ColorPageCloseButton isTopButton={true} color="blue" />
      </ColorPageTopSpace>
      <ColorPageContentSpace>
        aadhfia;sh
        <ColorPageCloseButton isTopButton={false} color="blue" />
      </ColorPageContentSpace>
    </ColorPageSpace>
  );
};

export default WorksPage;
