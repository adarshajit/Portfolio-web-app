import styled from "styled-components";

export const HomeContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  height: 500px;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    height: 580px;
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
    padding: 20px 0 0 20px;
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
  font-size: 40px;
`;

export const TextInfo = styled.p`
  font-size: 18px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: left;
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

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #641eff;
    cursor: pointer;
  }
`;
