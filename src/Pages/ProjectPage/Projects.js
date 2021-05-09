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
} from "./ProjectElements";

import Footer from "../../Components/Footer/Footer";

export const Projects = () => {
  const ProjectData = [
    {
      id: 1,
      name: "Depression Recogniser for twitter",
      BgColor: "#FDD180",
    },

    {
      id: 2,
      name: "Covid-19 Awareness",
      BgColor: "#8D9FFF",
    },

    {
      id: 3,
      name: "ICEFOSS 2021",
      BgColor: "#B8F7CA",
    },
    {
      id: 3,
      name: "Quotify",
      BgColor: "#FA80AA",
    },
    {
      id: 5,
      name: "Technical Essay Assessor",
      BgColor: "#FB8A80",
    },

    {
      id: 6,
      name: "CRUD Application",
      BgColor: "#A7FFEB",
    },
  ];
  return (
    <>
      <Bounce top>
        <ProjectContainer>
          <H1>Projects</H1>

          <ProjectGrid>
            {ProjectData.map((p) => {
              return (
                <ProjectBox style={{ backgroundColor: `${p.BgColor}` }}>
                  <P>{p.name}</P>
                  <Img />
                  <ButtonWrapper>
                    <P1>Read More</P1>
                  </ButtonWrapper>
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
