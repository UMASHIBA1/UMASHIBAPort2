import React from "react";
import "../../../css/Home/WorksArea.scss";
import blue_design from "../../../statics/blue_design.svg";
import HomeH1 from "../../Molecule/HomeH1";

const WorksArea: React.FC = () => {
  return (
    <React.Fragment>
      <div id="works-area">
        <div />
        <HomeH1 className="works-home-h1">Works</HomeH1>
        <object type="image/svg+xml" data={blue_design} />
      </div>
    </React.Fragment>
  );
};

export default WorksArea;
