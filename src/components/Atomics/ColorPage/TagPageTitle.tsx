import React from "react";
import "../../../css/ColorPage/TagPageTitle.scss";
import { ColorNames } from "../../../typing/colors";

interface Props {
  children: string;
  color: ColorNames;
}

const TagPageTitle: React.FC<Props> = (props: Props) => {
  return (
    <div
      className={`tag-page-title accent-${props.color}-background deep-${props.color}`}
    >
      <span>{props.children}</span>
    </div>
  );
};

export default TagPageTitle;
