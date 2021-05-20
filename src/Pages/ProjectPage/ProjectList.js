import React from "react";
import { IconContext } from "react-icons/lib";
import { useParams } from "react-router-dom";
import ProjecData from "./projectData";

import {
  ProjectWrapper,
  P,
  ButtonContainer,
  ButtonWrapper,
  Button1,
  Button2,
  Text,
  SocialIcon,
  ProjectContainer,
  Img,
  A,
  ImgWrapper,
} from "./ProjectListElements";
import { AiFillGithub as GitIcon } from "react-icons/ai";
const ProjectList = () => {
  var id = useParams();
  var data = ProjecData.filter((item) => item.id === id.Id)[0];

  return (
    <div>
      <ProjectContainer>
        <ImgWrapper>
          <Img src={data.cardImg} />
        </ImgWrapper>

        <ProjectWrapper>
          <P>{data.name}</P>
          <ButtonContainer>
            <ButtonWrapper>
              <A rel={"noreferrer"} href={data.projectLink} target="_blank">
                <Button1>View project</Button1>
              </A>
              <A rel={"noreferrer"} href={data.gitLink} target="_blank">
                <Button2 href={data.gitLink}>
                  <Text>Github</Text>
                  <SocialIcon>
                    <IconContext.Provider value={{ size: "26px" }}>
                      <GitIcon />
                    </IconContext.Provider>
                  </SocialIcon>
                </Button2>
              </A>
            </ButtonWrapper>
          </ButtonContainer>
        </ProjectWrapper>
      </ProjectContainer>
    </div>
  );
};

export default ProjectList;
