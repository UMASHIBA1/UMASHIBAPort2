import React from "react";
import "../../../../css/ColorPage/Skills/SkillsPageCard.scss";
import ColorPageCard from "../../../Atomics/ColorPage/ColorPageCard";
import ColorPageCardTitle from "../../../Atomics/ColorPage/ColorPageCardTitle";
import ColorPageTag from "../../../Atomics/ColorPage/ColorPageTag";

interface Props {
  title: string;
  description: string;
  tags: string[];
}

const SkillsPageCard: React.FC<Props> = (props: Props) => {
  return (
    <ColorPageCard color="orange">
      <div className="skills-page-card">
        <ColorPageCardTitle>{props.title}</ColorPageCardTitle>
        <div className="skills-page-card-description">{props.description}</div>
        <div className="skills-page-card-tags">
          {props.tags.map(tagName => (
            <ColorPageTag key={tagName} color={"orange"}>
              {tagName}
            </ColorPageTag>
          ))}
        </div>
      </div>
    </ColorPageCard>
  );
};

export default SkillsPageCard;
