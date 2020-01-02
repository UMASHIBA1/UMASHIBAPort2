import React from "react";
import "../../../../css/ColorPage/Works/WorksPageCard.scss";
import ColorPageCard from "../../../Atomics/ColorPage/ColorPageCard";
import ColorPageCardTitle from "../../../Atomics/ColorPage/ColorPageCardTitle";

interface Props {
  photo: string;
  photoalt: string;
  description: string;
  title: string;
  url: string;
  willCollapse: boolean;
  onAnimationEndFC?: () => void;
}

const WorksPageCard: React.FC<Props> = (props: Props) => {
  return (
    <ColorPageCard
      willCollapse={props.willCollapse}
      onAnimationEndFC={props.onAnimationEndFC}
      color="blue"
    >
      <div className="works-page-card">
        <div className="works-page-card-photo-area">
          <img src={props.photo} alt={props.photoalt} />
        </div>
        <div className="works-page-card-sentense-container">
          <ColorPageCardTitle>{props.title}</ColorPageCardTitle>
          <div className="works-page-card-description">{props.description}</div>
        </div>
      </div>
    </ColorPageCard>
  );
};

export default WorksPageCard;
