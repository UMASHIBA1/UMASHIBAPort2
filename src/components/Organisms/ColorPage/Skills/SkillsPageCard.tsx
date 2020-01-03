import React from "react";
import { useDispatch } from "react-redux";
import "../../../../css/ColorPage/Skills/SkillsPageCard.scss";
import { CHANGE_CLICKED_TAG } from "../../../../redux/constants/skillsPageTypes";
import { DispatchType } from "../../../../redux/store";
import ColorPageCard from "../../../Atomics/ColorPage/ColorPageCard";
import ColorPageCardTitle from "../../../Atomics/ColorPage/ColorPageCardTitle";
import ColorPageTag from "../../../Atomics/ColorPage/ColorPageTag";

interface Props {
  title: string;
  description: string;
  tags: string[];
  willCollapse: boolean;
  onDisappearFC?: () => void;
}

const SkillsPageCard: React.FC<Props> = (props: Props) => {
  const dispatch: DispatchType = useDispatch();

  const setTagNameToStore = (tagName: string) => {
    dispatch({ type: CHANGE_CLICKED_TAG, payload: tagName });
  };

  return (
    <ColorPageCard
      willCollapse={props.willCollapse}
      onDisappearFC={props.onDisappearFC}
      color="orange"
    >
      <div className="skills-page-card">
        <ColorPageCardTitle>{props.title}</ColorPageCardTitle>
        <div className="skills-page-card-description">{props.description}</div>
        <div className="skills-page-card-tags">
          {props.tags.map(tagName => (
            <ColorPageTag
              // tslint:disable-next-line: jsx-no-lambda
              onClickFC={() => setTagNameToStore(tagName)}
              key={tagName}
              color={"orange"}
            >
              {tagName}
            </ColorPageTag>
          ))}
        </div>
      </div>
    </ColorPageCard>
  );
};

export default SkillsPageCard;
