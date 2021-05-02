import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  height: 400px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  } ;
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px;
  height: 400px;

  @media screen and (max-width: 768px) {
    padding: 20px 0 0 50px;
  }

  @media screen and (max-width: 450px) {
    padding: 20px 0 0 90px;
  }
`;

export const HeroImg = styled.img`
  align-items: center;
  height: 350px;

  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;

export const TextContainer = styled.div`
  padding: 150px;
  height: 400px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

export const HeroText = styled.h1`
  display: flex;
  font-size: 35px;
`;

export const TextInfo = styled.p`
  display: flex;
  font-size: 18px;
`;
