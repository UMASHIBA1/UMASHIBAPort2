import React, { useState } from "react";
import { useHistory } from "react-router";
import worksData from "../../datas/worksData";
import ColorPageCloseButton from "../Atomics/ColorPage/ColorPageCloseButton";
import ColorPageTitle from "../Atomics/ColorPage/ColorPageTitle";
import WorksPageCard from "../Organisms/ColorPage/Works/WorksPageCard";
import ColorPageContentSpace from "../Template/ColorPage/ColorPageContentSpace";
import ColorPageSpace from "../Template/ColorPage/ColorPageSpace";
import ColorPageTopSpace from "../Template/ColorPage/ColorPageTopSpace";

const WorksPage = () => {
  const history = useHistory();
  const [willClosePage, changeWillClosePage] = useState(false);

  const changeWillclosePageToTrue = () => {
    changeWillClosePage(true);
  };

  const gotoHome = () => {
    history.push("/");
  };

  return (
    <ColorPageSpace color="blue">
      <ColorPageTopSpace>
        <ColorPageTitle willCollapse={willClosePage} titleColor="blue">
          Works
        </ColorPageTitle>
        <ColorPageCloseButton
          willCollapse={willClosePage}
          onClickFC={changeWillclosePageToTrue}
          isTopButton={true}
          color="blue"
        />
      </ColorPageTopSpace>
      <ColorPageContentSpace>
        {worksData.map(data => (
          <WorksPageCard
            willCollapse={willClosePage}
            key={data.title}
            {...data}
          />
        ))}
        <ColorPageCloseButton
          willCollapse={willClosePage}
          onClickFC={changeWillclosePageToTrue}
          isTopButton={false}
          color="blue"
        />
      </ColorPageContentSpace>
    </ColorPageSpace>
  );
};

export default WorksPage;
