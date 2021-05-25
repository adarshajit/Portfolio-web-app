import styled from "styled-components";

export const ProjectAll = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin: 60px 0 0 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 30px 0 0 0;
  }
`;

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const P = styled.p`
  font-size: 52px;
  font-weight: 600;

  @media screen and (max-width: 768px) {
    font-size: 45px;
  }

  @media screen and (max-width: 450px) {
    font-size: 28px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 25px 0 0 0;
`;

export const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;
export const Button1 = styled.button`
  border-style: none;
  font-size: 18px;
  font-weight: 600;
  width: 200px;
  height: 60px;
  color: #fff;
  border-radius: 50px;
  background-color: #7c4dff;
  border: 3px solid #000;

  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: #641eff;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 160px;
    height: 60px;
  }

  @media screen and (max-width: 370px) {
    width: 140px;
    height: 60px;
    font-size: 16px;
  }
`;

export const Button2 = styled.button`
  border-style: none;
  display: flex;
  flex-direction: row;
  font-size: 18px;
  font-weight: 600;
  width: 200px;
  height: 60px;
  color: #7c4dff;
  border-radius: 50px;
  background-color: #fff;
  border: 3px solid #7c4dff;
  justify-content: center;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 160px;
    height: 60px;
  }
  @media screen and (max-width: 370px) {
    width: 130px;
    height: 60px;
  }
`;

export const Text = styled.div`
  align-self: center;
`;

export const SocialIcon = styled.div`
  align-self: center;
  margin: 4px 0 0 4px;
  justify-content: center;
`;
export const A = styled.a`
  text-decoration: none;
`;

export const ImgWrapper = styled.div`
  display: grid;
  place-items: center;
`;
export const Img = styled.img`
  display: flex;
  width: 400px;
  height: 400px;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 330px;
    height: 330px;
  }

  @media screen and (max-width: 300px) {
    width: 280px;
    height: 280px;
  }
`;

export const ProjectInfo = styled.div`
  margin: 100px;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    margin: 100px 0 0 30px;
    max-width: 350px;
  }
`;

export const H1 = styled.h1`
  margin: 40px 0 10px 0;
  font-size: 32px;
`;
export const P2 = styled.p`
  font-size: 18px;
  font-weight: 500;

  @media screen and (max-width: 300px) {
    font-size: 15px;
  }
`;
