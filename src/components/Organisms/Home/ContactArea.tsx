import React from "react";
import "../../../css/Home/ContactArea.scss";
import green_design from "../../../statics/green_design.svg";
import HomeH1 from "../../Molecule/HomeH1";

const ContactArea: React.FC = () => {
  return (
    <React.Fragment>
      <div id="contact-area">
        <div />
        <HomeH1 className="contact-home-h1">Contact</HomeH1>
        <object type="image/svg+xml" data={green_design} />
      </div>
    </React.Fragment>
  );
};

export default ContactArea;
