import React from "react";
import "../../../css/Home/UMASHIBAPortArea.scss";
import pink_design from "../../../statics/pink_design.svg";
import HomeH1 from "../../Molecule/HomeH1";

const UMASHIBAPortArea: React.FC = () => {
  return (
    <div id="umashiba-port-area">
      <div />
      <HomeH1 className="home-h1-title">UMASHIBA Port</HomeH1>
      <object type="image/svg+xml" data={pink_design} />
    </div>
  );
};

export default UMASHIBAPortArea;
