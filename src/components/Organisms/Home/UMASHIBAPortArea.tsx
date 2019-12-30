import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "../../../css/Home/UMASHIBAPortArea.scss";
import { CHANGE_FOCUSED_AREA } from "../../../redux/constants/homeTypes";
import { DispatchType } from "../../../redux/store";
import pink_design from "../../../statics/pink_design.svg";
import HomeH1 from "../../Atomics/Home/HomeH1";

const UMASHIBAPortArea: React.FC = () => {
  const dispatch: DispatchType = useDispatch();
  const history = useHistory();

  const floatThis = () => {
    dispatch({ type: CHANGE_FOCUSED_AREA, payload: "umashibaPort" });
  };

  const gotoUMASHIBAPage = () => {
    history.push("/umashiba");
  };

  return (
    <div
      onClick={gotoUMASHIBAPage}
      onMouseOver={floatThis}
      id="umashiba-port-area"
      className="home-area home-area-cursor"
    >
      <div />
      <HomeH1 className="umashiba-port-home-h1 home-area-cursor">
        UMASHIBA Port
      </HomeH1>
      <img alt="UMASHIBA Portエリア背景" src={pink_design} />
    </div>
  );
};

export default UMASHIBAPortArea;
