import React from "react";
import "../../css/Home/Home.scss";
import ColorfulBackground from "../Organisms/Home/ColofulBackGround";

const Home: React.FC = () => {
  return (
    <div className="page-box white background">
      <ColorfulBackground />
    </div>
  );
};

export default Home;
