import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AboutSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;

  margin: 40px 0 150px 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    margin: 40px 0 140px 0;
    grid-gap: 5px;
    padding: 5px;
  }
`;

export const MyData = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-items: center;

  margin: 0px 50px 280px 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 30px;
    padding: 5px;
    margin: 0 0 170px 0;
  }
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #7c4dff;
  border: 3px solid #000;
  border-radius: 10px;
  align-self: center;
  width: 300px;
  height: 140px;
  color: #fff;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  font-weight: 800;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.3s ease-in-out;
    cursor: pointer;
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

  @media screen and (max-width: 768px) {
    max-width: 300px;
    max-height: 300px;
  }

  @media screen and (max-width: 360px) {
    max-width: 270px;
    max-height: 270px;
  }
`;

export const ProfileImg = styled.img`
  border-radius: 10px;
  border: 4px solid #000;
  align-items: center;
  height: 350px;
  width: 350px;
  position: absolute;
  z-index: 10;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translate(18px, -18px);
    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 360px) {
    max-width: 270px;
    max-height: 270px;
  }
`;

export const Overlay = styled.div`
  border-radius: 10px;
  position: relative;
  border: 4px solid #7c4dff;
  align-items: center;
  height: 350px;
  width: 350px;
  transform: translate(18px, -18px);

  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @media screen and (max-width: 360px) {
    width: 270px;
    height: 270px;
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
  display: grid;
  place-items: center;
  font-weight: 600;
  font-size: 70px;

  @media screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

export const P2 = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    font-size: 17px;
    text-align: left;
    margin-left: 30px;
  }
`;

export const Tag = styled.p`
  font-size: 18px;
  font-weight: 800;
  margin-right: 30px;
  color: #7c4dff;

  @media screen and (max-width: 768px) {
    font-size: 17px;
    margin-left: 30px;
    text-align: left;
  }
`;

export const Name = styled.p`
  font-size: 32px;
  font-weight: 800;
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-left: 30px;
    text-align: left;
  }
`;

export const Desig = styled.p`
  font-size: 22px;
  color: #5a5a5a;
  font-weight: 800;
  margin-right: 30px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    margin-left: 30px;
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
  font-size: 145px;
`;

export const FontWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 0 0 10px;
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
  color: #7c4dff;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #000;

  &:hover {
    color: #000;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: #7c4dff;
    transition: all 0.3s ease-in-out;
    cursor: ne-resize;
  }
`;

export const ColorWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 80px;
  place-items: center;
  margin-bottom: 200px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 0px;
  }
`;

export const Color = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 100px 0 0 0;
  display: grid;
  place-items: center;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12);
`;

export const ColorText = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: #fff;
`;

export const QuoteSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 150px 0 75px 0;
`;

export const QuoteOverlay = styled.div`
  display: flex;
  align-self: center;
  border-radius: 10px;
  width: 1000px;
  height: 300px;
  justify-content: center;
  align-items: center;
  border: 3px solid #000;
  position: relative;
  z-index: 6;
  transform: translate(30px, 30px);
  background-color: #7c4dff;

  @media screen and (max-width: 768px) {
    width: 360px;
    height: 400px;
    transform: translate(20px, 20px);
  }

  @media screen and (max-width: 375px) {
    width: 300px;
    height: 400px;
    transform: translate(20px, 20px);
  }
`;

export const Quote = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 10px;
  width: 1000px;
  height: 300px;
  background-color: #fff;
  z-index: 10;
  border: 3px solid #000;
  @media screen and (max-width: 768px) {
    width: 360px;
    height: 400px;
  }

  @media screen and (max-width: 375px) {
    width: 300px;
    height: 400px;
  }
`;

export const QuoteText = styled.p`
  font-size: 27px;
  margin-top: 50px;
  font-weight: 600;
  padding-left: 30px;

  @media screen and (max-width: 375px) {
    font-size: 24px;
  }
`;

export const QuoteAuthor = styled.p`
  display: flex;
  font-size: 27px;
  font-weight: 400;
  font-style: italic;
  margin: 40px 40px 0 0;
  align-self: flex-end;
`;
