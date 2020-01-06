import React, { ReactNode, useState } from "react";
import "../../../css/ColorPage/ColorPageSpace.scss";
import { ColorNames } from "../../../typing/colors";

interface Props {
  children: ReactNode;
  color: ColorNames;
}

const ColorPageSpace: React.FC<Props> = (props: Props) => {
  return (
    <div className={`color-page-space ${props.color}-background`}>
      {props.children}
    </div>
  );
};

export default ColorPageSpace;
