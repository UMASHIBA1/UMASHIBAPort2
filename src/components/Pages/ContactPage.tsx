import React from "react";
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

  const gotoHome = () => {
    history.push("/");
  };

  return (
    <ColorPageSpace color="green">
      <ColorPageTopSpace>
        <ColorPageTitle titleColor="green">Contact</ColorPageTitle>
        <ColorPageCloseButton
          onClickFC={gotoHome}
          isTopButton={true}
          color="green"
        />
      </ColorPageTopSpace>
      <ColorPageContentSpace>
        {contactData.map((data, index) => (
          <ContactPageCard
            key={index}
            title={data.title}
            content={data.content}
            url={data.url}
          />
        ))}
        <ColorPageCloseButton
          onClickFC={gotoHome}
          isTopButton={false}
          color="green"
        />
      </ColorPageContentSpace>
    </ColorPageSpace>
  );
};

export default ContactPage;
