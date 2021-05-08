import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  font-size: 40px;
  font-weight: 600;
  margin: 0 0 0 100px;

  @media screen and (max-width: 768px) {
    display: grid;
    place-items: center;
    margin: 0;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: 75px;
  margin: 40px 100px 0 100px;
  grid-gap: 5px;

  @media screen and (min-width: 1720px) {
    grid-gap: 20px;
  }
`;

export const ProjectBox = styled.div`
  width: 400px;
  height: 350px;
  padding: 10px;
  border-radius: 10px;
  background-color: #5a5a5a;
  display: flex;
  flex-direction: column;
  align-self: center;
  grid-column: span 3;
  grid-row: span 5;

  @media screen and (max-width: 360px) {
    width: 280px;
  }

  @media screen and (min-width: 360px) {
    width: 350px;
  }
`;

export const P = styled.p`
  font-size: 24px;
  padding: 12px 0 0 12px;
  font-weight: 600;
`;

export const Img = styled.img`
  width: 300px;
  height: 200px;
  display: flex;
  align-self: center;
  margin: 30px 15px 15px 15px;

  @media screen and (max-width: 768px) {
    width: 250px;
    height: 220px;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const P1 = styled.p`
  font-size: 18px;
  padding: 5px 0 0 12px;
  font-weight: 500;
`;
