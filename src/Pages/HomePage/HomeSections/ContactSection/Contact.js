import React from "react";
import {
  ContactContainer,
  ContactInfo,
  H1,
  ContactBox,
  P1,
  P2,
  Button,
  MailIcon,
  ButtonWrapper,
} from "./ContactElements";

const Contact = () => {
  return (
    <>
      <ContactContainer>
        <ContactInfo>
          <H1>Contact Me!</H1>
          <ContactBox>
            <P1>Get in Touch</P1>
            <P2>adarshajit@gmail.com</P2>
            <Button>
              <ButtonWrapper>
                Say Hello <MailIcon />
              </ButtonWrapper>
            </Button>
          </ContactBox>
        </ContactInfo>
      </ContactContainer>
    </>
  );
};

export default Contact;
