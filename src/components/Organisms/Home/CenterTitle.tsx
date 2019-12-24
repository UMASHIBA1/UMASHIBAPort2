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
  const umashibaPort = "UMASHIBA Port";
  return (
    <div className="maximum-expand center-title">
      <div className="center-title-text-container back-text-layer">
        <svg height="calc(26vh + 12vw)" width="100%">
          <linearGradient id="hello-world-center-text-linear" x1="10%">
            <stop offset="0%" stopColor="#e4007f" />
          </linearGradient>
          <text
            y="26vh"
            x="50%"
            textAnchor="middle"
            stroke="url(#hello-world-center-text-linear)"
            className="center-title-text hello-world-text"
          >
            {helloWorld}
          </text>
        </svg>
      </div>
      <div className="center-title-text-container back-text-layer">
        <svg height="calc(26vh + 12vw)" width="100%">
          <linearGradient id="im-umashiba-center-text-linear" x1="10%">
            <stop offset="0%" stopColor="#e4007f" />
          </linearGradient>
          <text
            y="26vh"
            x="50%"
            textAnchor="middle"
            stroke="url(#im-umashiba-center-text-linear)"
            className="center-title-text im-umashiba-text"
          >
            {ImUmashiba}
          </text>
        </svg>
      </div>
      <div className="center-title-text-container back-text-layer">
        <svg height="calc(26vh + 12vw)" width="100%">
          <linearGradient id="web-developer-center-text-linear" x1="10%">
            <stop offset="0%" stopColor="#e4007f" />
          </linearGradient>
          <text
            y="26vh"
            x="50%"
            textAnchor="middle"
            stroke="url(#web-developer-center-text-linear)"
            className="center-title-text web-developer-text"
          >
            {webDeveloper}
          </text>
        </svg>
      </div>
      <div className="center-title-text-container back-text-layer">
        <svg height="calc(26vh + 12vw)" width="100%">
          <linearGradient id="center-text-linear" x1="10%">
            <stop offset="0%" stopColor="#e4007f" />
          </linearGradient>
          <text
            y="26vh"
            x="50%"
            textAnchor="middle"
            stroke="url(#center-text-linear)"
            className="center-title-text welcome-text"
          >
            {welcomeTo}
          </text>
        </svg>
      </div>

      <div className="center-title-text-container back-text-layer">
        <svg height="calc(26vh + 12vw)" width="100%">
          <linearGradient id="center-text-linear" x1="10%">
            <stop offset="0%" stopColor="#e4007f" />
          </linearGradient>
          <text
            y="26vh"
            x="50%"
            textAnchor="middle"
            stroke="url(#center-text-linear)"
            className="center-title-text my-portfolio-text"
          >
            {myFolio}
          </text>
        </svg>
      </div>
      <div className="center-title-text-container back-text-layer">
        <svg height="calc(26vh + 12vw)" width="100%">
          <linearGradient id="center-text-linear" x1="10%">
            <stop offset="0%" stopColor="#e4007f" />
          </linearGradient>
          <text
            y="26vh"
            x="50%"
            textAnchor="middle"
            stroke="url(#center-text-linear)"
            className="center-title-text please-enjoy-text"
          >
            {pleaseEnjoy}
          </text>
        </svg>
      </div>
      <div className="center-title-text-container back-text-layer">
        <svg height="calc(26vh + 12vw)" width="100%">
          <linearGradient id="umashiba-port-center-text-linear" x1="10%">
            <stop offset="0%" stopColor="#e4007f" />
          </linearGradient>
          <text
            y="26vh"
            x="50%"
            textAnchor="middle"
            stroke="url(#umashiba-port-center-text-linear)"
            className="center-title-text umashiba-port-text"
          >
            {umashibaPort}
          </text>
        </svg>
      </div>
    </div>
  );
};

export default CenterTitle;
