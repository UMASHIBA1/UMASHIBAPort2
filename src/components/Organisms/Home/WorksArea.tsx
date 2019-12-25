import React from "react";
import "../../../css/Home/WorksArea.scss";
import blue_design from "../../../statics/blue_design.svg";

const WorksArea: React.FC = () => {
  return (
    <React.Fragment>
      <div id="works-area">
        <div />
        <object type="image/svg+xml" data={blue_design} />
      </div>
    </React.Fragment>
  );
};

export default WorksArea;
