import React from "react";
import "../../../css/Home/TechnologyArea.scss";
import orange_design from "../../../statics/orange_design.svg";
import { useTypedSelector } from "../../../typing/redux/hooks";
import HomeH1 from "../../Molecule/HomeH1";

const TechnologyArea: React.FC = () => {
  const focusedArea = useTypedSelector(state => state.homeState.focusedArea);
  let shadowClassName = "";
  if (focusedArea === "works") {
    shadowClassName = "inset-shadow";
  } else if (focusedArea === "technology") {
    shadowClassName = "normal-shadow";
  }

  return (
    <React.Fragment>
      <div id="technology-area">
        <div className={shadowClassName} />
        <HomeH1 className="technology-home-h1">Technology</HomeH1>
        <object type="image/svg+xml" data={orange_design} />
      </div>
    </React.Fragment>
  );
};

export default TechnologyArea;
