import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "../../../css/Home/ContactArea.scss";
import {
  CHANGE_FOCUSED_AREA,
  CHANGE_HOME_FIRST_ARRIVED
} from "../../../redux/constants/homeTypes";
import { DispatchType } from "../../../redux/store";
import green_design from "../../../statics/green_design.svg";
import { useTypedSelector } from "../../../typing/redux/hooks";
import HomeDisappearAnimation from "../../Atomics/Home/HomeDisappearAnimation";
import HomeH1 from "../../Atomics/Home/HomeH1";

const ContactArea: React.FC = () => {
  const focusedArea = useTypedSelector(state => state.homeState.focusedArea);
  const dispatch: DispatchType = useDispatch();
  const history = useHistory();
  const [isDisappearContent, changeIsDisappearContent] = useState(false);
  const homeFirstArrived = useTypedSelector(
    state => state.homeState.homeFirstArrived
  );

  let shadowClassName = "";
  if (focusedArea === "skills") {
    shadowClassName = "inset-shadow";
  } else if (focusedArea === "contact") {
    shadowClassName = "normal-shadow";
  }

  const floatThis = () => {
    dispatch({ type: CHANGE_FOCUSED_AREA, payload: "contact" });
  };

  const disappearContent = () => {
    changeIsDisappearContent(true);
  };

  const homeArrivedFlagToTrue = () => {
    dispatch({ type: CHANGE_HOME_FIRST_ARRIVED, payload: false });
  };

  const gotoContactPage = () => {
    history.push("/contact");
  };

  const onDisappearFC = () => {
    homeArrivedFlagToTrue();
    gotoContactPage();
  };

  return (
    <React.Fragment>
      <div
        onClick={disappearContent}
        onMouseOver={floatThis}
        id="contact-area"
        className="home-area home-area-cursor"
      >
        <div className={shadowClassName} />
        <HomeH1
          isAnimate={homeFirstArrived}
          className="contact-home-h1 home-area-cursor"
        >
          Contact
        </HomeH1>
        <img alt="Contactエリア背景" src={green_design} />
      </div>
      <HomeDisappearAnimation
        color="green"
        isStartAnimation={isDisappearContent}
        animationEndFC={onDisappearFC}
      />
    </React.Fragment>
  );
};

export default ContactArea;
