import React, { ReactNode } from "react";
import "../../../css/ColorPage/ColorPageCard.scss";
import { ColorNames } from "../../../typing/colors";

interface Props {
  children: ReactNode;
  color: ColorNames;
}

const ColorPageCard: React.FC<Props> = (props: Props) => {
  return (
    <div
      className={`color-page-card deep-${props.color} accent-${props.color}-background`}
    >
      {props.children}
    </div>
  );
};

export default ColorPageCard;
