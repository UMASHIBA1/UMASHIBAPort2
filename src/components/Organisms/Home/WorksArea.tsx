import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "../../../css/Home/WorksArea.scss";
import { CHANGE_FOCUSED_AREA } from "../../../redux/constants/homeTypes";
import { DispatchType } from "../../../redux/store";
import blue_design from "../../../statics/blue_design.svg";
import { useTypedSelector } from "../../../typing/redux/hooks";
import HomeDisappearAnimation from "../../Atomics/Home/HomeDisappearAnimation";
import HomeH1 from "../../Atomics/Home/HomeH1";

const WorksArea: React.FC = () => {
  const focusedArea = useTypedSelector(state => state.homeState.focusedArea);
  const dispatch: DispatchType = useDispatch();
  const history = useHistory();
  const [isDisappearContent, changeIsDisappearContent] = useState(false);
  const homeFirstArrived = useTypedSelector(
    state => state.homeState.homeFirstArrived
  );

  let shadowClassName = "";
  if (focusedArea === "umashibaPort") {
    shadowClassName = "inset-shadow";
  } else if (focusedArea === "works") {
    shadowClassName = "normal-shadow";
  }

  const floatThis = () => {
    dispatch({ type: CHANGE_FOCUSED_AREA, payload: "works" });
  };

  const disappearContent = () => {
    changeIsDisappearContent(true);
  };

  const gotoWorksPage = () => {
    history.push("/works");
  };

  return (
    <React.Fragment>
      <div
        onClick={disappearContent}
        onMouseOver={floatThis}
        id="works-area"
        className="home-area home-area-cursor"
      >
        <div className={`${shadowClassName} home-area-cursor`} />
        <HomeH1
          isAnimate={homeFirstArrived}
          className="works-home-h1 home-area-cursor"
        >
          Works
        </HomeH1>
        <img alt="Worksエリア背景" src={blue_design} />
      </div>
      <HomeDisappearAnimation
        color="blue"
        isStartAnimation={isDisappearContent}
        animationEndFC={gotoWorksPage}
      />
    </React.Fragment>
  );
};

export default WorksArea;
