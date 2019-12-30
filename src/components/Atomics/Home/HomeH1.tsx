import React from "react";
import "../../../css/Home/HomeH1.scss";

interface Props {
  children: string;
  className?: string;
}

const HomeH1: React.FC<Props> = (props: Props) => {
  const titleLength = props.children.length;

  return (
    <div
      className={`home-h1-container${
        props.className ? " " + props.className : ""
      }`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={`calc(6.5vw * ${titleLength * 0.6})`}
        height={`calc(6.5vw*1.4)`}
      >
        <text x="0" y="calc(6.5vw*1.2)" fontSize="6.5vw">
          {props.children}
        </text>
        <text x="0" y="calc(6.5vw*1.2)" fontSize="6.5vw">
          {props.children}
        </text>
      </svg>
    </div>
  );
};

export default HomeH1;
