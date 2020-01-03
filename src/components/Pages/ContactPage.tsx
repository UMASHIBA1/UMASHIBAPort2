import React, { useState } from "react";
import { useHistory } from "react-router";
import contactData from "../../datas/contactData";
import ColorPageCloseButton from "../Atomics/ColorPage/ColorPageCloseButton";
import ColorPageTitle from "../Atomics/ColorPage/ColorPageTitle";
import ContactPageCard from "../Organisms/ColorPage/Contact/ContactPageCard";
import ColorPageContentSpace from "../Template/ColorPage/ColorPageContentSpace";
import ColorPageSpace from "../Template/ColorPage/ColorPageSpace";
import ColorPageTopSpace from "../Template/ColorPage/ColorPageTopSpace";

const ContactPage = () => {
  const history = useHistory();
  const [willCloseContent, changeWillCloseContent] = useState(false);
  const [willClosePage, changeWillClosePage] = useState(false);

  const changeWillCloseContentToTrue = () => {
    changeWillCloseContent(true);
  };

  const changeWillClosePageToTrue = () => {
    changeWillClosePage(true);
  };

  const gotoHome = () => {
    history.push("/");
  };

  return (
    <ColorPageSpace
      onClosePageFC={gotoHome}
      isDisappearPage={willClosePage}
      color="green"
    >
      <ColorPageTopSpace>
        <ColorPageTitle willCollapse={willCloseContent} titleColor="green">
          Contact
        </ColorPageTitle>
        <ColorPageCloseButton
          willCollapse={willCloseContent}
          onClickFC={changeWillCloseContentToTrue}
          color="green"
        />
      </ColorPageTopSpace>
      <ColorPageContentSpace>
        {contactData.map(data => (
          <ContactPageCard
            willCollapse={willCloseContent}
            onAnimationEndFC={changeWillClosePageToTrue}
            key={data.title}
            {...data}
          />
        ))}
      </ColorPageContentSpace>
    </ColorPageSpace>
  );
};

export default ContactPage;
