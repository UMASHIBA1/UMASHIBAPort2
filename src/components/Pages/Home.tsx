import React from "react";
import "../../css/Home/Home.css";
import CenterTitle from "../Organisms/Home/CenterTitle";
import ColorfulBackground from "../Organisms/Home/ColorfulBackground";

const Home: React.FC = () => {
  return (
    <div className="page-box black-background white background">
      <ColorfulBackground />
      <main className="maximum-expand">
        <CenterTitle />
      </main>
    </div>
  );
};

export default Home;
