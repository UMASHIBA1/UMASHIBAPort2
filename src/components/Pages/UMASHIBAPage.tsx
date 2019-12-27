import React from "react";
import ColorPageCloseButton from "../Atomics/ColorPage/ColorPageCloseButton";
import ColorPageTitle from "../Atomics/ColorPage/ColorPageTitle";
import ColorPageTopSpace from "../Template/ColorfulPage/ColorPageTopSpace";

const UMASHIBAPage = () => {
  return (
    <div
      className="pink-background"
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row"
      }}
    >
      <ColorPageTopSpace>
        <ColorPageTitle titleColor="pink">UMASHIBA</ColorPageTitle>
        <ColorPageCloseButton color="pink" />
      </ColorPageTopSpace>
      {/* <div style={{ width: "400px", height: "300px" }}>
        <ColorPageCard color="pink">
          <span style={{ color: "#ffffff" }}>どうだろうか</span>
        </ColorPageCard>
      </div> */}
    </div>
  );
};

export default UMASHIBAPage;
