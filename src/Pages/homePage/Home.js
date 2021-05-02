import React from "react";
import { HomeContainer, HeroImg, HeroText } from "./HomeElements";
import Avatar from "../../Assets/doodle.png";

const Home = () => {
  return (
    <>
      <HomeContainer>
        <HeroImg src={Avatar} />

        <HeroText>world</HeroText>
      </HomeContainer>
    </>
  );
};

export default Home;
