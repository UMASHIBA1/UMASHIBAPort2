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
      color="blue"
    >
      <ColorPageTopSpace>
        <ColorPageTitle willCollapse={willCloseContent} titleColor="blue">
          Works
        </ColorPageTitle>
        <ColorPageCloseButton
          willCollapse={willCloseContent}
          onClickFC={changeWillCloseContentToTrue}
          color="blue"
        />
      </ColorPageTopSpace>
      <ColorPageContentSpace>
        {worksData.map(data => (
          <WorksPageCard
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

export default WorksPage;
