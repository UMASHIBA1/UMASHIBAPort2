import React, { ReactNode } from "react";
import "../../css/Home/HomeH1.scss";

interface Props {
  children: ReactNode;
  className?: string;
  onMouseOverFC?: () => void;
}

const HomeH1: React.FC<Props> = (props: Props) => {
  return (
    <div
      className={`home-h1-container${
        props.className ? " " + props.className : ""
      }`}
    >
      <h1 onMouseOver={props.onMouseOverFC} className="home-h1">
        {props.children}
      </h1>
    </div>
  );
};

export default HomeH1;
