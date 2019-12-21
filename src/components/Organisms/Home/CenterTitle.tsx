import React from "react";
import "../../../css/animation.css";
import "../../../css/Home/CenterTitle.css";

const CenterTitle: React.FC = () => {
  const helloWorld = "Hellow World!";
  const ImUmashiba = "I'm UMASHIBA";
  const webDeveloper = "Web Developer";
  const welcomeTo = "Welcome To";
  const myFolio = "My Portfolio";
  const pleaseEnjoy = "Please Enjoy!";
  return (
    <div className="maximum-expand center-title">
      <div className="center-title-text-container black-text-layer">
        <span className="center-title-text hello-world-black-text black">
          {helloWorld}
        </span>
      </div>
      <div className="center-title-text-container white-text-layer">
        <span className="center-title-text hello-world-white-text">
          {helloWorld}
        </span>
      </div>

      <div className="center-title-text-container black-text-layer">
        <span className="center-title-text im-umashiba-black-text black">
          {ImUmashiba}
        </span>
      </div>
      <div className="center-title-text-container white-text-layer">
        <span className="center-title-text im-umashiba-white-text">
          {ImUmashiba}
        </span>
      </div>

      <div className="center-title-text-container black-text-layer">
        <span className="center-title-text web-developer-black-text black">
          {webDeveloper}
        </span>
      </div>
      <div className="center-title-text-container white-text-layer">
        <span className="center-title-text web-developer-white-text">
          {webDeveloper}
        </span>
      </div>

      <div className="center-title-text-container black-text-layer">
        <span className="center-title-text welcome-black-text  black">
          {welcomeTo}
        </span>
      </div>
      <div className="center-title-text-container white-text-layer">
        <span className="center-title-text welcome-white-text ">
          {welcomeTo}
        </span>
      </div>

      <div className="center-title-text-container black-text-layer">
        <span className="center-title-text my-portfolio-black-text  black">
          {myFolio}
        </span>
      </div>
      <div className="center-title-text-container white-text-layer">
        <span className="center-title-text my-portfolio-white-text ">
          {myFolio}
        </span>
      </div>

      <div className="center-title-text-container black-text-layer">
        <span className="center-title-text please-enjoy-black-text  black">
          {pleaseEnjoy}
        </span>
      </div>
      <div className="center-title-text-container white-text-layer">
        <span className="center-title-text please-enjoy-white-text ">
          {pleaseEnjoy}
        </span>
      </div>
    </div>
  );
};

export default CenterTitle;
