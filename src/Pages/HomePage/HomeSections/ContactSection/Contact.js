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
  SocialIcon,
  IconWrapper,
  A,
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
                Say Hello
                <MailIcon />
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
                <A
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/adarshajit"
                >
                  <GitIcon />
                </A>
              </SocialIcon>
              <SocialIcon>
                <A
                  target="_blank"
                  rel="noreferrer"
                  href="https://twitter.com/AdarshAjits"
                >
                  <TwitterIcon />
                </A>
              </SocialIcon>
              <SocialIcon>
                <A
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/adarsh-ajit-2aaa5b1a5/"
                >
                  <LinkedinIcon />
                </A>
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
