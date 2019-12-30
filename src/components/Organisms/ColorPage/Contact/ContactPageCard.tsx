import React from "react";
import "../../../../css/ColorPage/Contact/ContactPageCard.scss";
import ColorPageCard from "../../../Atomics/ColorPage/ColorPageCard";
import ColorPageCardTitle from "../../../Atomics/ColorPage/ColorPageCardTitle";

interface Props {
  title: string;
  content: string;
  url?: string;
}

const ContactPageCard: React.FC<Props> = (props: Props) => {
  const gotoUrl = () => {
    window.open(props.url);
  };

  return (
    <ColorPageCard color="green">
      <div className="contact-page-card">
        <ColorPageCardTitle>{props.title}</ColorPageCardTitle>
        {props.url ? (
          <div>
            <div className="link" onClick={gotoUrl}>
              {props.content}
            </div>
          </div>
        ) : (
          <div>{props.content}</div>
        )}
      </div>
    </ColorPageCard>
  );
};

export default ContactPageCard;
