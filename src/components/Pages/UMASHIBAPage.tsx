import React from "react";
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

  const gotoHome = () => {
    history.push("/");
  };

  return (
    <ColorPageSpace color="pink">
      <ColorPageTopSpace>
        <ColorPageTitle titleColor="pink">UMASHIBA</ColorPageTitle>
        <ColorPageCloseButton
          onClickFC={gotoHome}
          isTopButton={true}
          color="pink"
        />
      </ColorPageTopSpace>
      <ColorPageContentSpace>
        {umashibaData.map((data, index) => (
          <UMASHIBAPageCard key={index} title={data.title}>
            {data.content}
          </UMASHIBAPageCard>
        ))}
        <ColorPageCloseButton
          onClickFC={gotoHome}
          isTopButton={false}
          color="pink"
        />
      </ColorPageContentSpace>
    </ColorPageSpace>
  );
};

export default UMASHIBAPage;
