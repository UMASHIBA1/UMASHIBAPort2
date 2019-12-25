import React from "react";
import "../../../css/Home/TechnologyArea.scss";
import orange_design from "../../../statics/orange_design.svg";

const TechnologyArea: React.FC = () => {
  return (
    <React.Fragment>
      <div id="technology-area">
        <div />
        <object type="image/svg+xml" data={orange_design} />
      </div>
    </React.Fragment>
  );
};

export default TechnologyArea;
