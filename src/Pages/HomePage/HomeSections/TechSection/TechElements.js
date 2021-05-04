import styled from "styled-components";

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 768px) {
    display: grid;
    place-items: center;
    top: 230px;
  }
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 40px;
  align-items: center;
  margin: 0 0 15px 0;

  @media screen and (max-width: 768px) {
    margin: 0px 5px 20px 5px;
  }
`;
export const P = styled.p`
  display: flex;
  justify-content: center;
  font-size: 20px;
  @media screen and (max-width: 768px) {
    padding: 0 10px 0 17px;
  }
`;

export const SkillContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px;

  @media screen and (max-width: 768px) {
    margin: 70px 0 0 0;
  }
`;

export const SkillIconWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 60px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 30px;
  }
`;

export const Icon = styled.div`
  color: #5c5c5c;
  cursor: pointer;
  &:hover {
    color: #000;
    transition: all 0.3s ease-in-out;
  }
`;
