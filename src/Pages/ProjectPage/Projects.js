import React from "react";
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
      BgColor: "#7c4dff",
    },

    {
      id: 2,
      name: "Covid-19 Awareness",
      BgColor: "red",
    },

    {
      id: 3,
      name: "ICEFOSS 2021",
      BgColor: "#7c4dff",
    },
    {
      id: 3,
      name: "Quotify",
      BgColor: "#7c4dff",
    },
    {
      id: 5,
      name: "Technical Essay Assessor",
      BgColor: "#7c4dff",
    },

    {
      id: 6,
      name: "CRUD Application",
      BgColor: "#7c4dff",
    },
  ];
  return (
    <>
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
      <Footer />
    </>
  );
};
