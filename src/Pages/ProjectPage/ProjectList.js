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
  ProjectAll,
  ProjectInfo,
  P2,
  H1,
  Img2,
} from "./ProjectListElements";
import { AiFillGithub as GitIcon } from "react-icons/ai";
const ProjectList = () => {
  var id = useParams();
  var data = ProjecData.filter((item) => item.id === id.Id)[0];

  return (
    <>
      <ProjectAll>
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
        <ProjectInfo>
          <H1>Features ✨</H1>
          {data.features.map((feature) => {
            return <P2>{`🔸 ${feature}`}</P2>;
          })}
          <H1>Built With 💻</H1>
          {data.builtWith.map((tech) => {
            return <P2>{`🔸 ${tech}`}</P2>;
          })}
          <H1>Screenshots 📷</H1>
          {data.screenshots.map((pic) => {
            return <Img2 src={pic} />;
          })}
        </ProjectInfo>
      </ProjectAll>
    </>
  );
};

export default ProjectList;
