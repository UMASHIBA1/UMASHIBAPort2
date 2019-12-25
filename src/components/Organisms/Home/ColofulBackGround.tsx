import React from "react";
import "../../../css/Home/ColorfulBackground.scss";
import ContactArea from "./ContactArea";
import TechnologyArea from "./TechnologyArea";
import UMASHIBAPortArea from "./UMASHIBAPortArea";
import WorksArea from "./WorksArea";

const ColorfulBackground: React.FC = () => {
  return (
    <div id="colorful-background">
      <UMASHIBAPortArea />
      <WorksArea />
      <TechnologyArea />
      <ContactArea />
    </div>
  );
};

export default ColorfulBackground;
