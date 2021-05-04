import React from "react";
import {
  H1,
  P,
  TechContainer,
  SkillContainer,
  SkillIconWrapper,
  Icon,
} from "./TechElements";
import * as SkillIcon from "react-icons/di";
import { IconContext } from "react-icons/lib";

const Tech = () => {
  return (
    <>
      <TechContainer>
        <H1>My Skills</H1>
        <P>Here are the tools and technologies that I use to get stuff done.</P>

        <SkillContainer>
          <IconContext.Provider value={{ size: "65px" }}>
            <SkillIconWrapper>
              <Icon>
                <SkillIcon.DiPython />
              </Icon>
              <Icon>
                <SkillIcon.DiHtml5 />
              </Icon>
              <Icon>
                <SkillIcon.DiJavascript1 />
              </Icon>
              <Icon>
                <SkillIcon.DiIllustrator />
              </Icon>
              <Icon>
                <SkillIcon.DiCss3 />
              </Icon>
              <Icon>
                <SkillIcon.DiBootstrap />
              </Icon>
              <Icon>
                <SkillIcon.DiMongodb />
              </Icon>
              <Icon>
                <SkillIcon.DiReact />
              </Icon>
              <Icon>
                <SkillIcon.DiGit />
              </Icon>
              <Icon>
                <SkillIcon.DiPhotoshop />
              </Icon>
              <Icon>
                <SkillIcon.DiNodejsSmall />
              </Icon>
            </SkillIconWrapper>
          </IconContext.Provider>
        </SkillContainer>
      </TechContainer>
    </>
  );
};

export default Tech;
