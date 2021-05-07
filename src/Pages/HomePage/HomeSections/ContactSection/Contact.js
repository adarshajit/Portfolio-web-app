import React from "react";
import {
  ContactContainer,
  ContactInfo,
  H1,
  ContactBox,
  P1,
  P2,
  P3,
  Button,
  MailIcon,
  ButtonWrapper,
  Icon,
  SocialIcon,
  IconWrapper,
} from "./ContactElements";

import { AiFillGithub as GitIcon } from "react-icons/ai";

import { AiFillLinkedin as LinkedinIcon } from "react-icons/ai";
import { FaTwitter as TwitterIcon } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import Footer from "../../../../Components/Footer/Footer";
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
                <Icon>
                  Say Hello
                  <MailIcon />
                </Icon>
              </ButtonWrapper>
            </Button>
          </ContactBox>
        </ContactInfo>

        <ContactInfo>
          <H1>Socials</H1>
          <P3>Follow me on</P3>
          <IconWrapper>
            <IconContext.Provider value={{ size: "60px" }}>
              <SocialIcon>
                <GitIcon />
              </SocialIcon>
              <SocialIcon>
                <TwitterIcon />
              </SocialIcon>
              <SocialIcon>
                <LinkedinIcon />
              </SocialIcon>
            </IconContext.Provider>
          </IconWrapper>
        </ContactInfo>

        <Footer />
      </ContactContainer>
    </>
  );
};

export default Contact;
