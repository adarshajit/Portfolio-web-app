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
    grid-gap: 5px;
    padding: 5px;
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

export const SubHeading = styled.p`
  font-weight: 600;
  font-size: 50px;
`;

export const P2 = styled.p`
  font-size: 20px;
  font-weight: 500;
  padding: 0 14px 0 0;

  @media screen and (max-width: 768px) {
    font-size: 17px;
    padding: 0 10px 0 10px;
    text-align: left;
  }
`;

export const ImgLogo = styled.img`
  width: 150px;
  height: 200px;
  align-self: center;

  @media screen and (max-width: 768px) {
    width: 150px;
    height: 200px;
  }
`;

export const H1 = styled.h1`
  font-size: 140px;
`;

export const FontWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 0 0 10px;
`;

export const P3 = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin: 0 0 8px 0;
`;

export const FontGrid = styled.div`
  display: grid;
  grid-template-columns: 120px 120px;
`;

export const P4 = styled.p`
  font-size: 16.5px;
  max-width: 300px;
`;

export const Upper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Lower = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Nums = styled.p`
  margin: 10px 0 0 0;
  font-weight: 600;
  font-size: 20px;
`;

export const FontText = styled.p`
  font-weight: 600;
  font-size: 20px;
`;

export const FontHead = styled.p`
  font-weight: 600;
  font-size: 22px;
  margin: 0 0 10px 0;
`;

export const TypeFace = styled.p`
  font-weight: 600;
  font-size: 200px;
`;
