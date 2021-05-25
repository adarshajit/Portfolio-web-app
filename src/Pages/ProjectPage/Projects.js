import React from "react";
import { Bounce } from "react-reveal";

import {
  ProjectContainer,
  H1,
  ProjectBox,
  ProjectGrid,
  P,
  Img,
  ButtonWrapper,
  P1,
  LinkR,
  Img1,
} from "./ProjectElements";

import Footer from "../../Components/Footer/Footer";
import ProjectData from "./projectData";
import otherData from "./otherData";
export const Projects = () => {
  return (
    <>
      <Bounce top>
        <ProjectContainer>
          <H1>Projects</H1>

          <ProjectGrid>
            {ProjectData.map((p, index) => {
              return (
                <ProjectBox style={{ backgroundColor: `${p.BgColor}` }}>
                  <LinkR to={`projects/${index + 1}`}>
                    <P>{p.name}</P>
                    <Img src={p.cardImg} />
                    <ButtonWrapper>
                      <P1>Read More</P1>
                    </ButtonWrapper>
                  </LinkR>
                </ProjectBox>
              );
            })}
          </ProjectGrid>
        </ProjectContainer>
      </Bounce>

      <ProjectContainer>
        <H1>Other</H1>

        <ProjectGrid>
          {otherData.map((o) => {
            return (
              <ProjectBox style={{ backgroundColor: `${o.BgColor}` }}>
                <LinkR to={o.link}>
                  <P>{o.name}</P>
                  <Img1 src={o.cardImg} />
                  <ButtonWrapper>
                    <P1>Read More</P1>
                  </ButtonWrapper>
                </LinkR>
              </ProjectBox>
            );
          })}
        </ProjectGrid>
      </ProjectContainer>

      <Footer />
    </>
  );
};
