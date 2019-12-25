import React from "react";
import "../../../css/Home/ContactArea.scss";
import green_design from "../../../statics/green_design.svg";

const ContactArea: React.FC = () => {
  return (
    <React.Fragment>
      <div id="contact-area">
        <div />
        <object type="image/svg+xml" data={green_design} />
      </div>
    </React.Fragment>
  );
};

export default ContactArea;
