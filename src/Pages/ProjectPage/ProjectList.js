import React from "react";
import { IconContext } from "react-icons/lib";
import { useParams } from "react-router-dom";
import ProjecData from "./projectData";

import {
  ProjectContainer,
  H1,
  P,
  ButtonContainer,
  ButtonWrapper,
  Button1,
  Button2,
  Text,
  SocialIcon,
} from "./ProjectListElements";
import { AiFillGithub as GitIcon } from "react-icons/ai";
const ProjectList = () => {
  let id = useParams();
  let data = ProjecData.filter((item) => item.id === id.Id)[0];

  return (
    <div>
      <ProjectContainer>
        <H1>0{data.id}</H1>
        <P>{data.name}</P>
        <ButtonContainer>
          <ButtonWrapper>
            <Button1>View project</Button1>
            <Button2>
              <Text>Github</Text>
              <SocialIcon>
                <IconContext.Provider value={{ size: "26px" }}>
                  <GitIcon />
                </IconContext.Provider>
              </SocialIcon>
            </Button2>
          </ButtonWrapper>
        </ButtonContainer>
      </ProjectContainer>
    </div>
  );
};

export default ProjectList;
