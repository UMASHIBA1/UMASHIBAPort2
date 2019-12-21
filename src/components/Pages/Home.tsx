import React from "react";
import "../../css/Home/Home.css";
import CenterTitle from "../Organisms/Home/CenterTitle";

const Home: React.FC = () => {
  return (
    <div className="page-box black-background white background">
      <main className="maximum-expand">
        <div className="maximum-expand colorful-materials"></div>
        <CenterTitle />
      </main>
    </div>
  );
};

export default Home;
