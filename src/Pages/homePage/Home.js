import React from "react";
import { HomeContainer, HeroImg, HeroText } from "./HomeElements";
import Avatar from "../../Assets/doodle.png";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HeroImg src={Avatar} />

        <HeroText>Hey There! Welcome to my space in the web.</HeroText>
      </HomeContainer>
    </>
  );
};

export default Home;
