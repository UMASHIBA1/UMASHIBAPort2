import React, { useState } from "react";
import { useHistory } from "react-router";
import contactData from "../../datas/contactData";
import ColorPageAppearAnimation from "../Atomics/ColorPage/ColorPageAppearAnimation";
import ColorPageCloseButton from "../Atomics/ColorPage/ColorPageCloseButton";
import ColorPageDisappearAnimation from "../Atomics/ColorPage/ColorPageDisappearAnimation";
import ColorPageTitle from "../Atomics/ColorPage/ColorPageTitle";
import ContactPageCard from "../Organisms/ColorPage/Contact/ContactPageCard";
import ColorPageContentSpace from "../Template/ColorPage/ColorPageContentSpace";
import ColorPageSpace from "../Template/ColorPage/ColorPageSpace";
import ColorPageTopSpace from "../Template/ColorPage/ColorPageTopSpace";

const ContactPage = () => {
  const history = useHistory();
  const [willCloseContent, changeWillCloseContent] = useState(false);
  const [willClosePage, changeWillClosePage] = useState(false);
  const [isAppearStartAnimation, changeIsAppearStartAnimation] = useState(true);

  const changeWillCloseContentToTrue = () => {
    changeWillCloseContent(true);
  };

  const changeWillClosePageToTrue = () => {
    changeWillClosePage(true);
  };

  const disappearStartAnimation = () => {
    changeIsAppearStartAnimation(false);
  };

  const gotoHome = () => {
    history.push("/");
  };

  if (isAppearStartAnimation) {
    return (
      <ColorPageAppearAnimation
        color="green"
        onAnimationEndFC={disappearStartAnimation}
      />
    );
  } else if (willClosePage) {
    return (
      <ColorPageDisappearAnimation color="green" onClosePageFC={gotoHome} />
    );
  } else {
    return (
      <ColorPageSpace color="green">
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
              onDisappearFC={changeWillClosePageToTrue}
              key={data.title}
              {...data}
            />
          ))}
        </ColorPageContentSpace>
      </ColorPageSpace>
    );
  }
};

export default ContactPage;
