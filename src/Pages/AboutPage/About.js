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
} from "./AboutElements";
import MacIcon from "../../Assets/mac.svg";
import Profile from "../../Assets/profile.jpg";

export const About = () => {
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
          {/* <P2>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
            ac efficitur lacus. Aliquam erat volutpat. Suspendisse eu arcu eu
            ligula lobortis scelerisque. Suspendisse sagittis eget sem fringilla
            tristique. Curabitur lobortis ipsum vehicula, luctus turpis non,
            rhoncus urna. Donec erat quam, consequat id ultrices a, accumsan
            eget lacus. Proin ac sollicitudin massa, at gravida sem. Aenean
            feugiat bibendum urna ut vulputate. Integer nisl purus, ultrices in
            lobortis a, porttitor ut augue. Nunc ipsum metus, auctor in nisl
            eget, luctus accumsan elit. Nulla nec viverra massa. Praesent
            eleifend mauris id elit dapibus finibus. Nulla facilisi. Integer
            semper facilisis porttitor. Phasellus faucibus dui sed nisi posuere
            congue. Etiam fermentum ultrices blandit. Curabitur vel arcu mi.
          </P2> */}
        </AboutSection>
      </AboutContainer>
    </>
  );
};
