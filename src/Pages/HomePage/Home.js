import React from "react";
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

const Home = () => {
  return (
    <>
      <HomeContainer>
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
            <Button>My Work</Button>
          </ButtonContainer>
        </TextContainer>
      </HomeContainer>
      <Tech />
    </>
  );
};

export default Home;
