import styled from "styled-components";

export const EducationContainer = styled.div`
  position: relative;
  top: 400px;
  height: 650px;
  @media screen and (max-width: 300px) {
    margin: 0 0 0 80px;
  }
`;

export const EducationInfo = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;

export const H1 = styled.h1`
  font-size: 50px;
  display: grid;
  place-items: center;
  margin: 0 0 60px 0;
  @media screen and (max-width: 300px) {
    font-size: 40px;
  }
`;

export const H2 = styled.h2`
  font-size: 40px;
  color: #fff;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #2d008f;
`;

export const P1 = styled.p`
  font-size: 24px;
  color: #fff;
  padding: 20px 0 28px 0;
  font-weight: 600;
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: #000;
`;

export const P2 = styled.p`
  font-size: 18px;
  color: #fff;
  padding-bottom: 20px;
  font-weight: 500;
`;

export const EducationWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const EducationCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 4px solid #000;
  width: 500px;
  height: 250px;
  border-radius: 10px;
  background-color: #7c4dff;
  padding: 24px 20px 0 20px;

  @media screen and (max-width: 768px) {
    width: 350px;
    height: 340px;
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
