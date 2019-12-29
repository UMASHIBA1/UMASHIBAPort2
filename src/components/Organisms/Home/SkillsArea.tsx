import React from "react";
import { useDispatch } from "react-redux";
import "../../../css/Home/SkillsArea.scss";
import { CHANGE_FOCUSED_AREA } from "../../../redux/constants/homeTypes";
import { DispatchType } from "../../../redux/store";
import orange_design from "../../../statics/orange_design.svg";
import { useTypedSelector } from "../../../typing/redux/hooks";
import HomeH1 from "../../Atomics/Home/HomeH1";

const SkillsArea: React.FC = () => {
  const focusedArea = useTypedSelector(state => state.homeState.focusedArea);
  const dispatch: DispatchType = useDispatch();

  let shadowClassName = "";
  if (focusedArea === "works") {
    shadowClassName = "inset-shadow";
  } else if (focusedArea === "skills") {
    shadowClassName = "normal-shadow";
  }

  const floatThis = () => {
    dispatch({ type: CHANGE_FOCUSED_AREA, payload: "skills" });
  };

  return (
    <React.Fragment>
      <div id="skills-area" className="home-area home-area-cursor">
        <div onMouseOver={floatThis} className={shadowClassName} />
        <HomeH1
          onMouseOverFC={floatThis}
          className="skills-home-h1 home-area-cursor"
        >
          Skills
        </HomeH1>
        <object
          onMouseOver={floatThis}
          type="image/svg+xml"
          data={orange_design}
        />
      </div>
    </React.Fragment>
  );
};

export default SkillsArea;
