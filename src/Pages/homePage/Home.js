import React from "react";
import {
  HomeContainer,
  HeroImg,
  HeroText,
  TextInfo,
  TextContainer,
  AvatarContainer,
} from "./HomeElements";
import Avatar from "../../Assets/doodle.png";

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
        </TextContainer>
      </HomeContainer>
    </>
  );
};

export default Home;
