import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "../../../css/Home/ContactArea.scss";
import { CHANGE_FOCUSED_AREA } from "../../../redux/constants/homeTypes";
import { DispatchType } from "../../../redux/store";
import green_design from "../../../statics/green_design.svg";
import { useTypedSelector } from "../../../typing/redux/hooks";
import HomeH1 from "../../Atomics/Home/HomeH1";

const ContactArea: React.FC = () => {
  const focusedArea = useTypedSelector(state => state.homeState.focusedArea);
  const dispatch: DispatchType = useDispatch();
  const history = useHistory();

  let shadowClassName = "";
  if (focusedArea === "skills") {
    shadowClassName = "inset-shadow";
  } else if (focusedArea === "contact") {
    shadowClassName = "normal-shadow";
  }

  const floatThis = () => {
    dispatch({ type: CHANGE_FOCUSED_AREA, payload: "contact" });
  };

  const gotoContactPage = () => {
    history.push("/contact");
  };

  return (
    <div
      onClick={gotoContactPage}
      onMouseOver={floatThis}
      id="contact-area"
      className="home-area home-area-cursor"
    >
      <div className={shadowClassName} />
      <HomeH1 className="contact-home-h1 home-area-cursor">Contact</HomeH1>
      <img alt="Contactエリア背景" src={green_design} />
    </div>
  );
};

export default ContactArea;
