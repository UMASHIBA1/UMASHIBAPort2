import React from "react";
import { useDispatch } from "react-redux";
import "../../../css/Home/ContactArea.scss";
import { CHANGE_FOCUSED_AREA } from "../../../redux/constants/homeTypes";
import { DispatchType } from "../../../redux/store";
import green_design from "../../../statics/green_design.svg";
import { useTypedSelector } from "../../../typing/redux/hooks";
import HomeH1 from "../../Molecule/HomeH1";

const ContactArea: React.FC = () => {
  const focusedArea = useTypedSelector(state => state.homeState.focusedArea);
  const dispatch: DispatchType = useDispatch();
  let shadowClassName = "";
  if (focusedArea === "technology") {
    shadowClassName = "inset-shadow";
  } else if (focusedArea === "contact") {
    shadowClassName = "normal-shadow";
  }

  const floatThis = () => {
    dispatch({ type: CHANGE_FOCUSED_AREA, payload: "contact" });
  };

  return (
    <React.Fragment>
      <div id="contact-area">
        <div onMouseOver={floatThis} className={shadowClassName} />
        <HomeH1 className="contact-home-h1">Contact</HomeH1>
        <object
          onMouseOver={floatThis}
          type="image/svg+xml"
          data={green_design}
        />
      </div>
    </React.Fragment>
  );
};

export default ContactArea;
