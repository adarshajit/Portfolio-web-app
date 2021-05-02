import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  } ;
`;

export const HeroImg = styled.img`
  display: flex;
  margin-left: 80px;

  height: 400px;

  @media screen and (max-width: 768px) {
    margin-left: 150px;

    height: 300px;
  }
  @media screen and (max-width: 450px) {
    margin-left: 80px;
    height: 300px;
  }
  @media screen and (max-width: 350px) {
    margin-left: 40px;
    height: 300px;
  } ;
`;

export const HeroText = styled.h1`
  display: flex;
  justify-content: center;
`;
