import React from "react";
import { Bounce } from "react-reveal";

import {
  AboutContainer,
  AboutSection,
  AboutText,
  P,
  P1,
  Img,
} from "./AboutElements";
import MacIcon from "../../Assets/mac.svg";

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
            <Img src={MacIcon} />
          </AboutSection>
        </Bounce>
      </AboutContainer>
    </>
  );
};
