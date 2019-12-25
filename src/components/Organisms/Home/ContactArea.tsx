import React from "react";
import "../../../css/Home/ContactArea.scss";
import green_design from "../../../statics/green_design.svg";
import { useTypedSelector } from "../../../typing/redux/hooks";
import HomeH1 from "../../Molecule/HomeH1";

const ContactArea: React.FC = () => {
  const focusedArea = useTypedSelector(state => state.homeState.focusedArea);
  let shadowClassName = "";
  if (focusedArea === "technology") {
    shadowClassName = "inset-shadow";
  } else if (focusedArea === "contact") {
    shadowClassName = "normal-shadow";
  }

  return (
    <React.Fragment>
      <div id="contact-area">
        <div className={shadowClassName} />
        <HomeH1 className="contact-home-h1">Contact</HomeH1>
        <object type="image/svg+xml" data={green_design} />
      </div>
    </React.Fragment>
  );
};

export default ContactArea;
