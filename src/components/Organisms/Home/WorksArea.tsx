import React from "react";
import "../../../css/Home/WorksArea.scss";
import blue_design from "../../../statics/blue_design.svg";
import { useTypedSelector } from "../../../typing/redux/hooks";
import HomeH1 from "../../Molecule/HomeH1";

const WorksArea: React.FC = () => {
  const focusedArea = useTypedSelector(state => state.homeState.focusedArea);
  let shadowClassName = "";
  if (focusedArea === "umashibaPort") {
    shadowClassName = "inset-shadow";
  } else if (focusedArea === "works") {
    shadowClassName = "normal-shadow";
  }

  return (
    <React.Fragment>
      <div id="works-area">
        <div className={shadowClassName} />
        <HomeH1 className="works-home-h1">Works</HomeH1>
        <object type="image/svg+xml" data={blue_design} />
      </div>
    </React.Fragment>
  );
};

export default WorksArea;
