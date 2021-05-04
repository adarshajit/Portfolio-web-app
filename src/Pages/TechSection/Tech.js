import React from "react";
import {
  H1,
  P,
  TechContainer,
  SkillContainer,
  SkillIconWrapper,
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
          <IconContext.Provider value={{ size: "55px" }}>
            <SkillIconWrapper>
              <SkillIcon.DiPython />
              <SkillIcon.DiHtml5 />
              <SkillIcon.DiJavascript1 />
              <SkillIcon.DiIllustrator />
              <SkillIcon.DiCss3 />
              <SkillIcon.DiBootstrap />
              <SkillIcon.DiMongodb />
              <SkillIcon.DiReact />
              <SkillIcon.DiGit />
              <SkillIcon.DiPhotoshop />
              <SkillIcon.DiNodejsSmall />
            </SkillIconWrapper>
          </IconContext.Provider>
        </SkillContainer>
      </TechContainer>
    </>
  );
};

export default Tech;
