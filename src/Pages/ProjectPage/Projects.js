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
} from "./ProjectElements";

import Footer from "../../Components/Footer/Footer";
import ProjectData from "./projectData";
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
                  <LinkR to={`project/${index + 1}`}>
                    <P>{p.name}</P>
                    <Img />
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
      <Footer />
    </>
  );
};
