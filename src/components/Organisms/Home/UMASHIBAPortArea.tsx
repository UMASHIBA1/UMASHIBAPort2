import React from "react";
import { useDispatch } from "react-redux";
import "../../../css/Home/UMASHIBAPortArea.scss";
import { CHANGE_FOCUSED_AREA } from "../../../redux/constants/homeTypes";
import { DispatchType } from "../../../redux/store";
import pink_design from "../../../statics/pink_design.svg";
import HomeH1 from "../../Molecule/HomeH1";

const UMASHIBAPortArea: React.FC = () => {
  const dispatch: DispatchType = useDispatch();

  const floatThis = () => {
    dispatch({ type: CHANGE_FOCUSED_AREA, payload: "umashibaPort" });
  };

  return (
    <div id="umashiba-port-area">
      <div onMouseOver={floatThis} />
      <HomeH1 className="umashiba-port-home-h1">UMASHIBA Port</HomeH1>
      <object onMouseOver={floatThis} type="image/svg+xml" data={pink_design} />
    </div>
  );
};

export default UMASHIBAPortArea;
