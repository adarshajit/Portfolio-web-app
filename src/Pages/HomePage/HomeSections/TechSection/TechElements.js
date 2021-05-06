import styled from "styled-components";

export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 230px;

  @media screen and (max-width: 768px) {
    display: grid;
    place-items: center;
  }

  @media screen and (max-width: 350px) {
    padding: 0 14px 0 14px;
    margin: 110px 0 0 0;
    max-width: 270px;
    max-height: 270px;
  }
`;

export const H1 = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 50px;
  align-items: center;
  margin: 0 0 15px 0;

  @media screen and (max-width: 768px) {
    margin: 0px 5px 20px 5px;
  }

  @media screen and (max-width: 350px) {
    font-size: 40px;
  }
`;
export const P = styled.p`
  display: flex;
  justify-content: center;
  font-size: 24px;
  color: #5e5e5e;
  font-weight: 500;
  @media screen and (max-width: 768px) {
    padding: 0 10px 0 17px;
    text-align: center;
    font-size: 20px;
  }
`;

export const SkillContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 230px;
  margin: 90px 0 90px 0;

  @media screen and (max-width: 768px) {
    margin: 70px 0 0 0;
    grid-template-columns: 1fr;
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

export const Img = styled.img`
  height: 350px;
  width: 350px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const Icon = styled.div`
  color: #5c5c5c;
  cursor: pointer;
  &:hover {
    color: #7c4dff;
    transition: all 0.3s ease-in-out;
  }
`;
