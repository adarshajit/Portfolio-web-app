import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;

  margin: 0 0 270px 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 0 0 200px 0;
  }
`;

export const AboutText = styled.div`
  display: flex;
  align-self: center;
  flex-direction: column;
`;

export const P = styled.p`
  font-size: 80px;
  font-weight: 600;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }

  @media screen and (max-width: 350px) {
    font-size: 40px;
  }
`;

export const P1 = styled.p`
  font-size: 22px;
  font-weight: 500;
  color: #5a5a5a;
  text-align: left;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    padding: 0 5px 0 5px;
    text-align: center;
  }

  @media screen and (max-width: 350px) {
    font-size: 14px;
  }
`;

export const Img = styled.img`
  display: flex;
  align-self: center;
  height: 350px;

  @media screen and (max-width: 350px) {
    max-width: 300px;
    max-height: 300px;
  }

  @media screen and (max-width: 350px) {
    max-width: 270px;
    max-height: 270px;
  }
`;

export const ProfileImg = styled.img`
  border-radius: 10px;
  border: 5px solid #7c4dff;

  align-items: center;
  height: 350px;

  @media screen and (max-width: 350px) {
    max-width: 300px;
    max-height: 300px;
  }

  @media screen and (max-width: 350px) {
    max-width: 270px;
    max-height: 270px;
  }
`;

export const P2 = styled.p`
  font-size: 18px;
  font-weight: 400;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  height: 400px;
  @media screen and (max-width: 350px) {
    padding: 0 14px 0 14px;
    max-width: 270px;
    max-height: 270px;
  }
`;
