import React from "react";
import "../../../css/ColorPage/TagPageTitle.scss";
import { ColorNames } from "../../../typing/colors";

interface Props {
  children: string;
  color: ColorNames;
  willCollapse: boolean;
}

const TagPageTitle: React.FC<Props> = (props: Props) => {
  if (props.willCollapse) {
    return (
      <div
        className={`tag-page-title accent-${props.color}-background deep-${props.color} minimum-tag-page-title`}
      >
        <span>{props.children}</span>
      </div>
    );
  } else {
    return (
      <div
        className={`tag-page-title accent-${props.color}-background deep-${props.color} expand-tag-page-title`}
      >
        <span>{props.children}</span>
      </div>
    );
  }
};

export default TagPageTitle;
