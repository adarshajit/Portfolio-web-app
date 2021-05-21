import styled from "styled-components";

export const EducationContainer = styled.div`
  height: 100%;

  @media screen and (max-width: 330px) {
    padding: 0 0 0 24px;
    top: 700px;
    max-width: 270px;
    max-height: 270px;
  }
`;

export const EducationInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-size: 38px;
  margin: 0 0 60px 50px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
    margin: 0 0 60px 0;
    display: grid;
    place-items: center;
  }
`;

export const H2 = styled.h2`
  font-size: 40px;
  color: #fff;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #2d008f;

  @media screen and (max-width: 350px) {
    font-size: 30px;
  }
`;

export const P1 = styled.p`
  font-size: 24px;
  color: #fff;
  padding: 20px 0 28px 0;
  font-weight: 600;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #000;

  @media screen and (max-width: 350px) {
    font-size: 22px;
  }
`;

export const P2 = styled.p`
  font-size: 18px;
  color: #fff;
  padding-bottom: 5px;
  font-weight: 500;

  @media screen and (max-width: 350px) {
    font-size: 15px;
  }
`;

export const EducationWrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-gap: 50px;
  padding: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media screen and (max-width: 350px) {
    max-width: 270px;
    max-height: 270px;
  }
`;

export const EducationCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 4px solid #000;
  width: 1000px;
  height: 250px;
  border-radius: 10px;
  background-color: #7c4dff;
  padding: 10px;

  @media screen and (max-width: 768px) {
    width: 350px;
    height: 340px;
  }

  @media screen and (max-width: 350px) {
    max-width: 270px;
    max-height: 270px;
    padding: 12px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Num = styled.p`
  font-size: 17px;
  color: #fff;
`;
