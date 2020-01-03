import React, { useState } from "react";
import { useHistory } from "react-router";
import umashibaData from "../../datas/umashibaData";
import ColorPageCloseButton from "../Atomics/ColorPage/ColorPageCloseButton";
import ColorPageTitle from "../Atomics/ColorPage/ColorPageTitle";
import UMASHIBAPageCard from "../Organisms/ColorPage/UMASHIBA/UMASHIBAPageCard";
import ColorPageContentSpace from "../Template/ColorPage/ColorPageContentSpace";
import ColorPageSpace from "../Template/ColorPage/ColorPageSpace";
import ColorPageTopSpace from "../Template/ColorPage/ColorPageTopSpace";

const UMASHIBAPage = () => {
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
      color="pink"
    >
      <ColorPageTopSpace>
        <ColorPageTitle willCollapse={willCloseContent} titleColor="pink">
          UMASHIBA
        </ColorPageTitle>
        <ColorPageCloseButton
          willCollapse={willCloseContent}
          onClickFC={changeWillCloseContentToTrue}
          isTopButton={true}
          color="pink"
        />
      </ColorPageTopSpace>
      <ColorPageContentSpace>
        {umashibaData.map(data => (
          <UMASHIBAPageCard
            onAnimationEndFC={changeWillClosePageToTrue}
            willCollapse={willCloseContent}
            key={data.title}
            title={data.title}
          >
            {data.content}
          </UMASHIBAPageCard>
        ))}
        <ColorPageCloseButton
          willCollapse={willCloseContent}
          onClickFC={changeWillCloseContentToTrue}
          isTopButton={false}
          color="pink"
        />
      </ColorPageContentSpace>
    </ColorPageSpace>
  );
};

export default UMASHIBAPage;
