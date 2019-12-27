import React from "react";
import "../../css/Home/Home.scss";
import ContactArea from "../Organisms/Home/ContactArea";
import TechnologyArea from "../Organisms/Home/TechnologyArea";
import UMASHIBAPortArea from "../Organisms/Home/UMASHIBAPortArea";
import WorksArea from "../Organisms/Home/WorksArea";
import ColorfulBackground from "../Template/Home/ColofulBackGround";

const Home: React.FC = () => {
  return (
    <div className="page-box white background">
      <ColorfulBackground>
        <UMASHIBAPortArea />
        <WorksArea />
        <TechnologyArea />
        <ContactArea />
      </ColorfulBackground>
    </div>
  );
};

export default Home;
