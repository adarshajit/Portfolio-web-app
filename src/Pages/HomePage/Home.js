import React from "react";
import Bounce from "react-reveal/Bounce";
import {
  HomeContainer,
  HeroImg,
  HeroText,
  TextInfo,
  TextContainer,
  AvatarContainer,
  Button,
  ButtonContainer,
} from "./HomeElements";
import Avatar from "../../Assets/doodle.png";
import Tech from "../HomePage/HomeSections/TechSection/Tech";
import Education from "../HomePage/HomeSections/EducationSection/Education";
import Organisations from "../HomePage/HomeSections/OrgSection/Org";
import Contact from "./HomeSections/ContactSection/Contact";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Bounce top>
          <AvatarContainer>
            <HeroImg src={Avatar} />
          </AvatarContainer>

          <TextContainer>
            <HeroText>Hey There! 👋</HeroText>
            <TextInfo>
              Welcome to my space in the web. Thanks for coming by. Here you can
              learn about my journey so far.
            </TextInfo>
            <ButtonContainer>
              <Button>Let's Talk</Button>
              <Button>Resume</Button>
            </ButtonContainer>
          </TextContainer>
        </Bounce>
      </HomeContainer>
      <Tech />
      <Education />
      <Organisations />
      <Contact />
    </>
  );
};

export default Home;
