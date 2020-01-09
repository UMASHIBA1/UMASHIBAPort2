import React from "react";
import "../../../css/Home/HomeH1.scss";

interface Props {
  children: string;
  className?: string;
  isAnimate: boolean;
  onAnimationEndFC?: () => void;
}

const HomeH1: React.FC<Props> = (props: Props) => {
  const titleLength = props.children.length;

  if (props.isAnimate) {
    return (
      <div
        className={`home-h1-container${
          props.className ? " " + props.className : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`calc(6.5vw * ${titleLength * 0.6})`}
          height={`9.1vw`}
        >
          <text x="0" y="85%" fontSize="6.5vw">
            {props.children}
          </text>
          <text
            x="0"
            y="85%"
            fontSize="6.5vw"
            onAnimationEnd={props.onAnimationEndFC}
          >
            {props.children}
          </text>
        </svg>
      </div>
    );
  } else {
    return (
      <div
        className={`home-h1-container-no-animation${
          props.className ? " " + props.className : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={`calc(6.5vw * ${titleLength * 0.6})`}
          height={`9.1vw`}
        >
          <text x="0" y="85%" fontSize="6.5vw">
            {props.children}
          </text>
        </svg>
      </div>
    );
  }
};

export default HomeH1;
