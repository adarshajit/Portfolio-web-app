import React from "react";
import { Bounce } from "react-reveal";

import {
  AboutContainer,
  AboutSection,
  AboutText,
  P,
  P1,
  Img,
  ProfileImg,
  ImgWrapper,
  SubHeading,
  P2,
  ImgLogo,
  H1,
  FontWrapper,
  FontGrid,
  FontText,
  FontHead,
  P4,
  Upper,
  Lower,
  Nums,
  TypeFace,
  ColorWrapper,
  Color,
  ColorText,
  Overlay,
  Quote,
  QuoteSection,
  QuoteOverlay,
  QuoteText,
  QuoteAuthor,
  Name,
  Desig,
  Tag,
  MyData,
  InfoCard,
} from "./AboutElements";
import MacIcon from "../../Assets/mac.svg";
import Profile from "../../Assets/profile.jpg";
import Logo from "../../Assets/logo.png";
import Footer from "../../Components/Footer/Footer";
export const About = () => {
  document.title = "Adarsh Ajit - About";
  const colorsList = ["#000", "#5a5a5a", "#7c4dff"];
  return (
    <>
      <AboutContainer>
        <Bounce top>
          <AboutSection>
            <AboutText>
              <P>About Me</P>
              <P1>So who am I?</P1>
              <P1>Let me introduce myself...</P1>
            </AboutText>
            <ImgWrapper>
              <Img src={MacIcon} />
            </ImgWrapper>
          </AboutSection>
        </Bounce>

        <AboutSection>
          <ImgWrapper>
            <ProfileImg src={Profile} />
            <Overlay />
          </ImgWrapper>
          <div>
            <Tag>Hi, My name is.. </Tag>
            <Name>Adarsh Ajit ✨</Name>
            <Desig>Software Engineer, BigBinary</Desig>
            <P2>
              I'am a recent Computer Science graduate from Federal Institute of
              Science and Technology. I was always fascinated by computers the
              moment I got a chance to use one when I was in 3rd grade. I was
              introduced to programming when i was in my high school and that
              really propelled my interest and passion for this field. I have
              been learning different languages and tools to broadly expand my
              expertise and knowledge in the world of programming and design.
            </P2>
          </div>
        </AboutSection>
        <MyData>
          <a
            href="https://resume.io/r/9baJP8n7y"
            rel="noreferrer"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <InfoCard>
              <h6>Download my</h6>
              <p>Resume</p>
            </InfoCard>
          </a>
          <a
            href="https://github.com/adarshajit"
            rel="noreferrer"
            target="_blank"
            style={{ textDecoration: "none" }}
          >
            <InfoCard>
              <h6>View all my projects</h6>
              <p>Github</p>
            </InfoCard>
          </a>
          <a
            href="mailto:adarshajit@gmail.com?body=Hi%20Adarsh,"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: "none" }}
          >
            <InfoCard>
              <h6>Lets have a chat</h6>
              <p>Email</p>
            </InfoCard>
          </a>
        </MyData>

        <AboutText>
          <SubHeading>The Logo</SubHeading>
          <P1>Decided to keep it clean and minimal.</P1>
        </AboutText>
        <AboutSection>
          <H1>A</H1>
          <ImgWrapper>
            <ImgLogo src={Logo} />
          </ImgWrapper>
        </AboutSection>

        <AboutText>
          <SubHeading>Typography</SubHeading>
        </AboutText>
        <AboutSection>
          <FontWrapper>
            <FontHead>Poppins</FontHead>
            <FontGrid>
              <Upper>
                <FontText>ABCDEF</FontText>
                <FontText> GHIJKLM</FontText>
                <FontText> NOPQRST</FontText>
                <FontText>UVWXYZ</FontText>
              </Upper>

              <Lower>
                <FontText>abcdef</FontText>
                <FontText>ghijklm</FontText>
                <FontText>nopqrst</FontText>
                <FontText>uvwxyz</FontText>
              </Lower>
            </FontGrid>
            <Nums>0123456789!@#$%^&*.</Nums>
            <P4>
              Poppins is a clean and elegant sans-serif font. Each letterform is
              nearly monolinear, with optical corrections applied to stroke
              joints where necessary to maintain an even typographic color.
            </P4>
          </FontWrapper>
          <TypeFace>Aa</TypeFace>
        </AboutSection>

        <AboutText>
          <SubHeading>Colors</SubHeading>
          <ColorWrapper>
            <Color style={{ backgroundColor: colorsList[0] }}>
              <ColorText>{colorsList[0]}</ColorText>
            </Color>
            <Color style={{ backgroundColor: colorsList[1] }}>
              <ColorText>{colorsList[1]}</ColorText>
            </Color>
            <Color style={{ backgroundColor: colorsList[2] }}>
              <ColorText>{colorsList[2]}</ColorText>
            </Color>
          </ColorWrapper>
        </AboutText>

        <QuoteSection>
          <Quote>
            <QuoteText>
              When you are content to be simply yourself and don't compare or
              compete, everybody will respect you.
            </QuoteText>
            <QuoteAuthor>- Laozi</QuoteAuthor>
          </Quote>
          <QuoteOverlay />
        </QuoteSection>

        <Footer />
      </AboutContainer>
    </>
  );
};
