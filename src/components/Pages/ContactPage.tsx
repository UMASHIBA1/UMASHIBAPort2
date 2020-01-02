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
  const [willClosePage, changeWillClosePage] = useState(false);

  const changeWillclosePageToTrue = () => {
    changeWillClosePage(true);
  };

  const gotoHome = () => {
    history.push("/");
  };

  return (
    <ColorPageSpace color="green">
      <ColorPageTopSpace>
        <ColorPageTitle willCollapse={willClosePage} titleColor="green">
          Contact
        </ColorPageTitle>
        <ColorPageCloseButton
          willCollapse={willClosePage}
          onClickFC={changeWillclosePageToTrue}
          isTopButton={true}
          color="green"
        />
      </ColorPageTopSpace>
      <ColorPageContentSpace>
        {contactData.map(data => (
          <ContactPageCard
            willCollapse={willClosePage}
            key={data.title}
            {...data}
          />
        ))}
        <ColorPageCloseButton
          willCollapse={willClosePage}
          onClickFC={changeWillclosePageToTrue}
          isTopButton={false}
          color="green"
        />
      </ColorPageContentSpace>
    </ColorPageSpace>
  );
};

export default ContactPage;
