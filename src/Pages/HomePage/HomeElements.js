import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  height: 500px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    height: 580px;
  }

  @media screen and (max-width: 350px) {
    padding: 0 0 0 28px;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 80px;
  height: 400px;

  @media screen and (max-width: 768px) {
    padding: 20px 0 0 50px;
  }

  @media screen and (max-width: 350px) {
    padding: 0 14px 0 14px;
    max-width: 270px;
    max-height: 270px;
  }
`;

export const HeroImg = styled.img`
  align-items: center;
  height: 350px;

  @media screen and (max-width: 768px) {
    align-items: center;
  }

  @media screen and (max-width: 350px) {
    padding: 20px 0 0 20px;
  }
`;

export const TextContainer = styled.div`
  padding: 150px;
  height: 400px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }

  @media screen and (max-width: 350px) {
    padding: 0 14px 0 14px;
    margin: 110px 0 0 0;
    max-width: 270px;
    max-height: 270px;
  }
`;

export const HeroText = styled.h1`
  font-size: 46px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const TextInfo = styled.p`
  font-size: 19px;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button`
  margin: 24px 24px 0 0;
  width: 140px;
  height: 57px;
  font-size: 17px;
  color: #fff;
  border: none;
  text-decoration: none;
  border-radius: 32px;
  background-color: #7c4dff;
  border: 3px solid #000;
  font-weight: 600;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #641eff;
    cursor: pointer;
  }
`;
