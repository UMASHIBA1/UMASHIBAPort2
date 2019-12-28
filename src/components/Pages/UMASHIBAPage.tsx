import React from "react";
import umashibaData from "../../datas/umashibaData";
import ColorPageCloseButton from "../Atomics/ColorPage/ColorPageCloseButton";
import ColorPageTitle from "../Atomics/ColorPage/ColorPageTitle";
import UMASHIBAPageCard from "../Organisms/ColorPage/UMASHIBA/UMASHIBAPageCard";
import ColorPageContentSpace from "../Template/ColorPage/ColorPageContentSpace";
import ColorPageSpace from "../Template/ColorPage/ColorPageSpace";
import ColorPageTopSpace from "../Template/ColorPage/ColorPageTopSpace";

const UMASHIBAPage = () => {
  return (
    <ColorPageSpace color="pink">
      <ColorPageTopSpace>
        <ColorPageTitle titleColor="pink">UMASHIBA</ColorPageTitle>
        <ColorPageCloseButton isTopButton={true} color="pink" />
      </ColorPageTopSpace>
      <ColorPageContentSpace>
        {umashibaData.map((data, index) => (
          <UMASHIBAPageCard key={index} title={data.title}>
            {data.content}
          </UMASHIBAPageCard>
        ))}
        <ColorPageCloseButton isTopButton={false} color="pink" />
      </ColorPageContentSpace>
    </ColorPageSpace>
  );
};

export default UMASHIBAPage;
