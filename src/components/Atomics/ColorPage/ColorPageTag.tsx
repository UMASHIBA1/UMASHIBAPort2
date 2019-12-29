import React from "react";
import "../../../css/ColorPage/ColorPageTag.scss";
import { ColorNames } from "../../../typing/colors";

interface Props {
  children: string;
  color: ColorNames;
}

const ColorPageTag: React.FC<Props> = (props: Props) => {
  return (
    <div className={`color-page-tag ${props.color}-background`}>
      <span>{props.children}</span>
    </div>
  );
};
export default ColorPageTag;
