import React from "react";
import { useDispatch } from "react-redux";
import "../../../css/Home/WorksArea.scss";
import { CHANGE_FOCUSED_AREA } from "../../../redux/constants/homeTypes";
import { DispatchType } from "../../../redux/store";
import blue_design from "../../../statics/blue_design.svg";
import { useTypedSelector } from "../../../typing/redux/hooks";
import HomeH1 from "../../Molecule/HomeH1";

const WorksArea: React.FC = () => {
  const focusedArea = useTypedSelector(state => state.homeState.focusedArea);
  const dispatch: DispatchType = useDispatch();

  let shadowClassName = "";
  if (focusedArea === "umashibaPort") {
    shadowClassName = "inset-shadow";
  } else if (focusedArea === "works") {
    shadowClassName = "normal-shadow";
  }

  const floatThis = () => {
    dispatch({ type: CHANGE_FOCUSED_AREA, payload: "works" });
  };

  return (
    <React.Fragment>
      <div id="works-area" className="home-area home-area-cursor">
        <div
          onMouseOver={floatThis}
          className={`${shadowClassName} home-area-cursor`}
        />
        <HomeH1
          onMouseOverFC={floatThis}
          className="works-home-h1 home-area-cursor"
        >
          Works
        </HomeH1>
        <object
          onMouseOver={floatThis}
          type="image/svg+xml"
          data={blue_design}
        />
      </div>
    </React.Fragment>
  );
};

export default WorksArea;
