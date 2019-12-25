import React, { ReactNode } from "react";
import "../../css/Home/HomeH1.scss";

interface Props {
  children: ReactNode;
  className?: string;
}

const HomeH1: React.FC<Props> = (props: Props) => {
  return (
    <h1 className={`home-h1${props.className ? " " + props.className : ""}`}>
      {props.children}
    </h1>
  );
};

export default HomeH1;
