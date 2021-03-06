import React from "react";
import "../../css/Home/Home.scss";
import HomeAppearAnimation from "../Atomics/Home/HomeAppearAnimation";
import ContactArea from "../Organisms/Home/ContactArea";
import SkillsArea from "../Organisms/Home/SkillsArea";
import UMASHIBAPortArea from "../Organisms/Home/UMASHIBAPortArea";
import WorksArea from "../Organisms/Home/WorksArea";
import ColorfulBackground from "../Template/Home/ColofulBackGround";

const Home: React.FC = () => {
  return (
    <div className="page-box white-background">
      <HomeAppearAnimation />
      <ColorfulBackground>
        <UMASHIBAPortArea />
        <WorksArea />
        <SkillsArea />
        <ContactArea />
      </ColorfulBackground>
    </div>
  );
};

export default Home;
