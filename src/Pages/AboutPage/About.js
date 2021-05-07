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
} from "./AboutElements";
import MacIcon from "../../Assets/mac.svg";
import Profile from "../../Assets/profile.jpg";
import Logo from "../../Assets/logo.png";
import Footer from "../../Components/Footer/Footer";
export const About = () => {
  const colorsList = ["#000", "#5a5a5a", "#7c4dff"];
  return (
    <>
      <AboutContainer>
        <Bounce top>
          <AboutSection>
            <AboutText>
              <P>About Me</P>
              <P1>So who am I?</P1>
              <P1>Here you can learn all about me!</P1>
            </AboutText>
            <ImgWrapper>
              <Img src={MacIcon} />
            </ImgWrapper>
          </AboutSection>
        </Bounce>

        <AboutSection>
          <ImgWrapper>
            <ProfileImg src={Profile} />
          </ImgWrapper>
          <P2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ac efficitur lacus. Aliquam erat volutpat. Suspendisse eu arcu eu
            ligula lobortis scelerisque. Suspendisse sagittis eget sem fringilla
            tristique. Curabitur lobortis ipsum vehicula, luctus turpis non,
            rhoncus urna. Donec erat quam, consequat id ultrices a, accumsan
            eget lacus. Proin ac sollicitudin massa, at gravida sem. Aenean
            feugiat bibendum urna ut vulputate.
          </P2>
        </AboutSection>

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

        <Footer />
      </AboutContainer>
    </>
  );
};
