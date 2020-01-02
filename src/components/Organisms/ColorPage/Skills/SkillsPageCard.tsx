import React from "react";
import { useHistory } from "react-router";
import "../../../../css/ColorPage/Skills/SkillsPageCard.scss";
import ColorPageCard from "../../../Atomics/ColorPage/ColorPageCard";
import ColorPageCardTitle from "../../../Atomics/ColorPage/ColorPageCardTitle";
import ColorPageTag from "../../../Atomics/ColorPage/ColorPageTag";

interface Props {
  title: string;
  description: string;
  tags: string[];
  willCollapse: boolean;
  onAnimationEndFC?: () => void;
}

const SkillsPageCard: React.FC<Props> = (props: Props) => {
  const history = useHistory();

  const gotoSkillTagPage = (tag: string) => {
    history.push(`/skillstag/${tag}`);
  };

  return (
    <ColorPageCard
      willCollapse={props.willCollapse}
      onAnimationEndFC={props.onAnimationEndFC}
      color="orange"
    >
      <div className="skills-page-card">
        <ColorPageCardTitle>{props.title}</ColorPageCardTitle>
        <div className="skills-page-card-description">{props.description}</div>
        <div className="skills-page-card-tags">
          {props.tags.map(tagName => (
            <ColorPageTag
              // tslint:disable-next-line: jsx-no-lambda
              onClickFC={() => gotoSkillTagPage(tagName)}
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
