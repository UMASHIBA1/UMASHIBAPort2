import React from "react";
import "../../../../css/ColorPage/UMASHIBA/UMASHIBAPageCard.scss";
import ColorPageCard from "../../../Atomics/ColorPage/ColorPageCard";
import ColorPageCardTitle from "../../../Atomics/ColorPage/ColorPageCardTitle";
import UMASHIBAPageCardContent from "../../../Atomics/ColorPage/UMASHIBA/UMASHIBAPageCardContent";

interface Props {
  title: string;
  children: string;
  willCollapse: boolean;
  onDisappearFC?: () => void;
}

const UMASHIBAPageCard: React.FC<Props> = (props: Props) => {
  return (
    <ColorPageCard
      willCollapse={props.willCollapse}
      onDisappearFC={props.onDisappearFC}
      color="pink"
    >
      <div className="umashiba-page-card">
        <ColorPageCardTitle>{props.title}</ColorPageCardTitle>
        <div className="umashiba-page-card-content-container">
          <UMASHIBAPageCardContent>{props.children}</UMASHIBAPageCardContent>
        </div>
      </div>
    </ColorPageCard>
  );
};

export default UMASHIBAPageCard;
