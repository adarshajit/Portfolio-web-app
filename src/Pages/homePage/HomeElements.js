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
  margin: 50px 0 0 200px;

  height: 400px;

  @media screen and (max-width: 768px) {
    margin: 24px 0 0 135px;

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
  margin: 150px 0 0 50px;
  font-size: 20px;

  height: 400px;

  @media screen and (max-width: 768px) {
    margin: 24px 0 0 135px;
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
