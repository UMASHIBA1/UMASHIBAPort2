import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "../../../css/Home/UMASHIBAPortArea.scss";
import {
  CHANGE_FOCUSED_AREA,
  CHANGE_HOME_FIRST_ARRIVED
} from "../../../redux/constants/homeTypes";
import { DispatchType } from "../../../redux/store";
import pink_design from "../../../statics/pink_design.svg";
import { useTypedSelector } from "../../../typing/redux/hooks";
import HomeDisappearAnimation from "../../Atomics/Home/HomeDisappearAnimation";
import HomeH1 from "../../Atomics/Home/HomeH1";

const UMASHIBAPortArea: React.FC = () => {
  const dispatch: DispatchType = useDispatch();
  const history = useHistory();
  const [isDisappearContent, changeIsDisappearContent] = useState(false);
  const homeFirstArrived = useTypedSelector(
    state => state.homeState.homeFirstArrived
  );

  const floatThis = () => {
    dispatch({ type: CHANGE_FOCUSED_AREA, payload: "umashibaPort" });
  };

  const disappearContent = () => {
    changeIsDisappearContent(true);
  };

  const homeArrivedFlagToTrue = () => {
    dispatch({ type: CHANGE_HOME_FIRST_ARRIVED, payload: false });
  };

  const gotoUMASHIBAPage = () => {
    history.push("/umashiba");
  };

  const onDisappearFC = () => {
    homeArrivedFlagToTrue();
    gotoUMASHIBAPage();
  };

  return (
    <React.Fragment>
      <div
        onClick={disappearContent}
        onMouseOver={floatThis}
        id="umashiba-port-area"
        className="home-area home-area-cursor"
      >
        <div />
        <HomeH1
          isAnimate={homeFirstArrived}
          className="umashiba-port-home-h1 home-area-cursor"
        >
          UMASHIBA Port
        </HomeH1>
        <img alt="UMASHIBA Portエリア背景" src={pink_design} />
      </div>
      <HomeDisappearAnimation
        color="pink"
        isStartAnimation={isDisappearContent}
        animationEndFC={onDisappearFC}
      />
    </React.Fragment>
  );
};

export default UMASHIBAPortArea;
